import { createClient } from "@libsql/client";

export const db = createClient({
  url: process.env.DATABASE_URL || "libsql://sortbrands-cardendante.aws-ap-northeast-1.turso.io",
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

export async function createAllTables() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      subject TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      read_status BOOLEAN DEFAULT FALSE
    );
  `);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS donations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      amount REAL NOT NULL,
      message TEXT,
      status TEXT DEFAULT 'pending',
      mpesa_checkout_id TEXT,
      mpesa_receipt TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS join_requests (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      join_type TEXT NOT NULL,
      message TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  console.log("✅ All tables ensured successfully.");
}
