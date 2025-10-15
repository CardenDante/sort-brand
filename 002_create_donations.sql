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
