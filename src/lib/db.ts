// lib/db.ts
import { createClient } from '@libsql/client';

export const db = createClient({
  url: process.env.DATABASE_URL || 'libsql://sortbrands-cardendante.aws-ap-northeast-1.turso.io',
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

export async function createContactsTable() {
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
    )
  `);
}