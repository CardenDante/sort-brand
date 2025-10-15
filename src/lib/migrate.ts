import { db } from "@/lib/db";

/**
 * One-time migration runner for your Turso DB.
 * Creates any missing tables without affecting existing data.
 */
export async function runMigrations() {
  try {
    console.log("🚀 Checking and applying database migrations...");

    // === JOIN REQUESTS TABLE ===
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

    // === DONATIONS TABLE ===
    await db.execute(`
      CREATE TABLE IF NOT EXISTS donations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT,
        phone TEXT NOT NULL,
        amount REAL NOT NULL,
        message TEXT,
        status TEXT DEFAULT 'pending',
        mpesa_checkout_id TEXT,
        mpesa_receipt TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // === CONTACTS TABLE SAFETY PATCH (optional) ===
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

    console.log("✅ Migrations applied successfully.");
  } catch (err) {
    console.error("❌ Migration error:", err);
  }
}
