// scripts/init-db.js
const { createClient } = require('@libsql/client');
require('dotenv').config({ path: '.env.local' });

const db = createClient({
  url: process.env.DATABASE_URL,
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

async function createContactsTable() {
  try {
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
    console.log('✅ Database table created successfully!');
  } catch (error) {
    console.error('❌ Error creating database table:', error);
  }
}

createContactsTable();