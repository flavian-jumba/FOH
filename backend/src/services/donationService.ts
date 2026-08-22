import { db } from "../config/database.ts";

// Donation type definition
export interface Donation {
  id: number;
  amount: number;
  phoneNumber: string;
  status: 'PENDING' | 'SUCCESS' | 'FAILED';
  mpesaReceiptNumber: string | null;
  checkoutRequestId: string | null;
  merchantRequestId: string | null;
  createdAt: string;
  updatedAt: string;
}

// Create a new donation record
export async function createDonation(amount: number, phoneNumber: string): Promise<Donation> {
  const stmt = db.prepare(`
    INSERT INTO donations (amount, phoneNumber, status)
    VALUES (?, ?, 'PENDING')
  `);

  const info = stmt.run(amount, phoneNumber);
  const id = info.lastInsertRowid as number;

  // Retrieve the created donation
  const donation = await getDonationById(id);
  if (donation === undefined) {
    throw new Error("Failed to retrieve created donation");
  }
  return donation;
}

// Get donation by ID
export async function getDonationById(id: number): Promise<Donation | undefined> {
  const stmt = db.prepare(`
    SELECT id, amount, phoneNumber, status, mpesaReceiptNumber,
           checkoutRequestId, merchantRequestId, createdAt, updatedAt
    FROM donations WHERE id = ?
  `);

  const row = stmt.get(id) as Donation | undefined;
  return row;
}

// Update donation status and M-Pesa details
export async function updateDonation(
  id: number,
  updates: Partial<Omit<Donation, 'id' | 'createdAt'>>
): Promise<Donation | undefined> {
  // Build the SET clause dynamically
  const fields = Object.keys(updates).filter(key => key !== 'id' && key !== 'createdAt');
  if (fields.length === 0) {
    return getDonationById(id);
  }

  const setClause = fields.map(field => `${field} = ?`).join(', ');
  const values = [...fields.map(field => updates[field as keyof typeof updates]), id];

  const stmt = db.prepare(`
    UPDATE donations
    SET ${setClause}, updatedAt = CURRENT_TIMESTAMP
    WHERE id = ?
  `);

  stmt.run(...values);
  return getDonationById(id);
}

// Get all donations (optional, for admin/viewing)
export async function getAllDonations(): Promise<Donation[]> {
  const stmt = db.prepare(`
    SELECT id, amount, phoneNumber, status, mpesaReceiptNumber,
           checkoutRequestId, merchantRequestId, createdAt, updatedAt
    FROM donations ORDER BY createdAt DESC
  `);

  return stmt.all() as Donation[];
}