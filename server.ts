import express, { Request, Response } from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static frontend from docs/
app.use(express.static(path.resolve('docs')));

// Database pool
let pool: mysql.Pool | null = null;

function getPool(): mysql.Pool {
  if (!pool) {
    const host = process.env.DB_HOST;
    const portNum = Number(process.env.DB_PORT) || 4000;
    const user = process.env.DB_USERNAME;
    const password = process.env.DB_PASSWORD;
    const database = process.env.DB_DATABASE || 'neitclem_analytics';

    if (!host || !user || !password) {
      throw new Error('Database credentials missing in environment.');
    }

    pool = mysql.createPool({
      host,
      port: portNum,
      user,
      password,
      database,
      ssl: {
        minVersion: 'TLSv1.2',
        rejectUnauthorized: true,
      },
      waitForConnections: true,
      connectionLimit: 10,
    });
  }
  return pool;
}

// 1. Get all developers list
app.get('/api/developers', async (_req: Request, res: Response) => {
  try {
    const db = getPool();
    const [rows]: any = await db.query('SELECT developer_id, developer_name FROM dim_developer WHERE developer_name != "Unassigned" ORDER BY developer_name ASC');
    res.json(rows);
  } catch (err: any) {
    console.error('Error fetching developers:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// 2. Get assignments from DB (mapping app_name -> developer_name)
app.get('/api/assignments', async (_req: Request, res: Response) => {
  try {
    const db = getPool();
    // 1. Get developer assigned on the application itself, or fallback to latest fact execution
    const [rows]: any = await db.query(`
      SELECT 
        a.app_name,
        COALESCE(da.developer_name, df.developer_name, '') as developer_name
      FROM dim_application a
      LEFT JOIN dim_developer da ON a.assigned_developer_id = da.developer_id
      LEFT JOIN (
        SELECT f.app_id, f.developer_id
        FROM fact_application_test_execution f
        INNER JOIN (
          SELECT app_id, MAX(execution_id) as max_exec
          FROM fact_application_test_execution
          GROUP BY app_id
        ) latest ON f.execution_id = latest.max_exec
      ) curr ON a.app_id = curr.app_id
      LEFT JOIN dim_developer df ON curr.developer_id = df.developer_id
    `);

    const result: Record<string, string> = {};
    for (const row of rows) {
      result[row.app_name] = row.developer_name === 'Unassigned' ? '' : row.developer_name;
    }
    res.json(result);
  } catch (err: any) {
    console.error('Error fetching assignments:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// 3. Update developer assignment in TiDB
app.post('/api/assign', async (req: Request, res: Response) => {
  const { appName, developerName } = req.body;
  if (!appName) {
    return res.status(400).json({ error: 'appName is required' });
  }

  try {
    const db = getPool();

    // Ensure assigned_developer_id column exists on dim_application
    try {
      await db.query(`
        ALTER TABLE dim_application 
        ADD COLUMN IF NOT EXISTS assigned_developer_id INT DEFAULT NULL
      `);
    } catch { }

    // Find developer ID
    let devId = 0; // 0 = Unassigned
    if (developerName && developerName.trim() !== '') {
      const [devRows]: any = await db.query('SELECT developer_id FROM dim_developer WHERE LOWER(developer_name) = ?', [
        developerName.trim().toLowerCase(),
      ]);
      if (devRows.length > 0) {
        devId = devRows[0].developer_id;
      } else {
        const [insertDev]: any = await db.query('INSERT INTO dim_developer (developer_name) VALUES (?)', [
          developerName.trim(),
        ]);
        devId = insertDev.insertId;
      }
    }

    // Update the application's permanent assigned_developer_id
    await db.query(`
      UPDATE dim_application 
      SET assigned_developer_id = ? 
      WHERE app_name = ?
    `, [devId, appName]);

    // Also update any existing fact rows for this app so history matches
    await db.query(`
      UPDATE fact_application_test_execution f
      JOIN dim_application a ON f.app_id = a.app_id
      SET f.developer_id = ?
      WHERE a.app_name = ?
    `, [devId, appName]);

    console.log(`✅ Saved assignment: ${appName} -> ${developerName || 'Unassigned'} (dev_id: ${devId})`);
    res.json({ success: true, appName, developerName });
  } catch (err: any) {
    console.error('Error updating assignment:', err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
