import mysql from 'mysql2/promise';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

interface TestResult {
  name: string;
  url: string;
  status: number | null;
  ok: boolean;
  checkedAt: string;
}

interface E2EResult {
  status: string;
}

async function syncToTiDB() {
  const host = process.env.DB_HOST;
  const port = Number(process.env.DB_PORT) || 4000;
  const user = process.env.DB_USERNAME;
  const password = process.env.DB_PASSWORD;
  const database = process.env.DB_DATABASE || 'neitclem_analytics';

  if (!host || !user || !password) {
    console.error('❌ Missing database credentials. Ensure DB_HOST, DB_USERNAME, and DB_PASSWORD are set.');
    process.exit(1);
  }

  const resultsFile = path.resolve('docs/data/applications-ok-results.json');
  const assignmentsFile = path.resolve('docs/data/assignments.json');
  const e2eFile = path.resolve('docs/data/e2e-results.json');

  if (!fs.existsSync(resultsFile)) {
    console.warn(`⚠️ Results file not found at ${resultsFile}. Nothing to sync.`);
    return;
  }

  const rawResults: TestResult[] = JSON.parse(fs.readFileSync(resultsFile, 'utf-8'));
  let assignments: Record<string, string> = {};
  if (fs.existsSync(assignmentsFile)) {
    assignments = JSON.parse(fs.readFileSync(assignmentsFile, 'utf-8'));
  }

  let e2eData: Record<string, string | E2EResult> = {};
  if (fs.existsSync(e2eFile)) {
    try {
      e2eData = JSON.parse(fs.readFileSync(e2eFile, 'utf-8'));
    } catch {
      e2eData = {};
    }
  }

  // Deduplicate results, keeping latest checkedAt per application
  const latestMap: Record<string, TestResult> = {};
  for (const entry of rawResults) {
    const existing = latestMap[entry.name];
    if (!existing || new Date(entry.checkedAt) > new Date(existing.checkedAt)) {
      latestMap[entry.name] = entry;
    }
  }
  const testResults = Object.values(latestMap);

  console.log(`📡 Connecting to TiDB Cloud at ${host}:${port}...`);
  const connection = await mysql.createConnection({
    host,
    port,
    user,
    password,
    database,
    ssl: {
      minVersion: 'TLSv1.2',
      rejectUnauthorized: true,
    },
  });

  console.log('✅ Connected to TiDB.');

  try {
    // 1. Fetch apps and developers
    const [appRows] = await connection.query('SELECT app_id, app_name FROM dim_application');
    const appMap = new Map<string, number>();
    for (const r of appRows as { app_id: number; app_name: string }[]) {
      appMap.set(r.app_name, r.app_id);
    }

    const [devRows] = await connection.query('SELECT developer_id, developer_name FROM dim_developer');
    const devMap = new Map<string, number>();
    for (const r of devRows as { developer_id: number; developer_name: string }[]) {
      devMap.set(r.developer_name.toLowerCase(), r.developer_id);
    }

    // 2. Create record in dim_test_run
    const trigger = process.env.GITHUB_EVENT_NAME || 'manual';
    const commitSha = process.env.GITHUB_SHA || null;
    const githubRunId = process.env.GITHUB_RUN_ID || null;
    const now = new Date();

    const [runResult]: any = await connection.query(
      `INSERT INTO dim_test_run (run_trigger, git_commit_sha, github_run_id, started_at, completed_at)
       VALUES (?, ?, ?, ?, ?)`,
      [trigger, commitSha, githubRunId, now, now]
    );

    const testRunId = runResult.insertId;
    console.log(`Created dim_test_run record with ID: ${testRunId}`);

    // 3. Insert / Ensure dim_date & dim_time
    const dateId = Number(
      `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`
    );
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const isWeekend = now.getDay() === 0 || now.getDay() === 6;

    await connection.query(
      `INSERT INTO dim_date (date_id, full_date, day_of_week, day_name, month, month_name, quarter, year, is_weekend)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE full_date = VALUES(full_date)`,
      [
        dateId,
        now.toISOString().split('T')[0],
        now.getDay() === 0 ? 7 : now.getDay(),
        dayNames[now.getDay()],
        now.getMonth() + 1,
        monthNames[now.getMonth()],
        Math.floor(now.getMonth() / 3) + 1,
        now.getFullYear(),
        isWeekend,
      ]
    );

    const hour = now.getHours();
    const minute = now.getMinutes();
    const timeId = hour * 100 + minute;
    const amPm = hour >= 12 ? 'PM' : 'AM';
    const fullTimeStr = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

    await connection.query(
      `INSERT INTO dim_time (time_id, full_time, hour, minute, am_pm)
       VALUES (?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE full_time = VALUES(full_time)`,
      [timeId, fullTimeStr, hour, minute, amPm]
    );

    // 4. Insert facts
    let insertedCount = 0;
    for (const res of testResults) {
      let appId = appMap.get(res.name);
      if (!appId) {
        const [insertedApp]: any = await connection.query(
          `INSERT INTO dim_application (app_name, category, target_url) VALUES (?, 'Uncategorized', ?)`,
          [res.name, res.url]
        );
        appId = insertedApp.insertId;
        appMap.set(res.name, appId!);
      }

      const assignedDevName = (assignments[res.name] || '').trim().toLowerCase();
      let devId = devMap.get(assignedDevName);
      if (devId === undefined) {
        devId = devMap.get('unassigned') || 0;
      }

      let e2eStatus: string | null = null;
      if (e2eData[res.name]) {
        const val = e2eData[res.name];
        e2eStatus = typeof val === 'string' ? val : val.status;
      }

      await connection.query(
        `INSERT INTO fact_application_test_execution 
         (app_id, developer_id, test_run_id, date_id, time_id, http_status_code, is_http_ok, e2e_status)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [appId, devId, testRunId, dateId, timeId, res.status, res.ok ? 1 : 0, e2eStatus]
      );
      insertedCount++;
    }

    console.log(`✅ Successfully uploaded ${insertedCount} test executions to fact_application_test_execution.`);
  } finally {
    await connection.end();
  }
}

syncToTiDB().catch((err) => {
  console.error('❌ Failed syncing to TiDB:', err);
  process.exit(1);
});
