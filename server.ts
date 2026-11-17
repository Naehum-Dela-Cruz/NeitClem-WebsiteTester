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
    // Query latest developer assigned in fact or application table
    const [rows]: any = await db.query(`
      SELECT a.app_name, COALESCE(d.developer_name, '') as developer_name
      FROM dim_application a
      LEFT JOIN (
        SELECT f.app_id, f.developer_id
        FROM fact_application_test_execution f
        INNER JOIN (
          SELECT app_id, MAX(execution_id) as max_exec
          FROM fact_application_test_execution
          GROUP BY app_id
        ) latest ON f.execution_id = latest.max_exec
      ) curr ON a.app_id = curr.app_id
      LEFT JOIN dim_developer d ON curr.developer_id = d.developer_id
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

    // Find developer ID
    let devId = 0; // 0 = Unassigned
    if (developerName && developerName.trim() !== '') {
      const [devRows]: any = await db.query('SELECT developer_id FROM dim_developer WHERE LOWER(developer_name) = ?', [
        developerName.trim().toLowerCase(),
      ]);
      if (devRows.length > 0) {
        devId = devRows[0].developer_id;
      } else {
        // Create developer if not exists
        const [insertDev]: any = await db.query('INSERT INTO dim_developer (developer_name) VALUES (?)', [
          developerName.trim(),
        ]);
        devId = insertDev.insertId;
      }
    }

    // Find application ID
    const [appRows]: any = await db.query('SELECT app_id FROM dim_application WHERE app_name = ?', [appName]);
    if (appRows.length === 0) {
      return res.status(404).json({ error: 'Application not found' });
    }
    const appId = appRows[0].app_id;

    // Update fact records for this app so the latest execution reflects this developer
    await db.query(`
      UPDATE fact_application_test_execution 
      SET developer_id = ? 
      WHERE app_id = ?
    `, [devId, appId]);

    console.log(`Updated assignment: ${appName} -> ${developerName || 'Unassigned'} (dev_id: ${devId})`);
    res.json({ success: true, appName, developerName });
  } catch (err: any) {
    console.error('Error updating assignment:', err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
