import Database from 'better-sqlite3';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';

// Determine database path: use DB_PATH env var if set, otherwise default to ./data/donations.db relative to backend root
const DB_PATH = process.env.DB_PATH
  ? join(process.cwd(), process.env.DB_PATH)
  : join(process.cwd(), 'data', 'donations.db');

// Ensure the directory for the database file exists
const dbDir = join(DB_PATH, '..');
if (!existsSync(dbDir)) {
  mkdirSync(dbDir, { recursive: true });
}

// Initialize the database
const db = new Database(DB_PATH);

// Create the donations table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS donations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    amount INTEGER NOT NULL,
    phoneNumber TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'PENDING',
    mpesaReceiptNumber TEXT,
    checkoutRequestId TEXT,
    merchantRequestId TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// Function to update the updatedAt timestamp
const updateTimestamp = db.prepare(`
  UPDATE donations SET updatedAt = CURRENT_TIMESTAMP WHERE id = ?
`);

// Export the database and helper functions
export { db, updateTimestamp };

export default db;