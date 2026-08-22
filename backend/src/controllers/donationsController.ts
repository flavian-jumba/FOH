import { Request, Response } from "express";
import { createDonation, getDonationById, Donation } from "../services/donationService.ts";

/**
 * Validates and normalizes a Kenyan phone number.
 * Returns the normalized phone number in format 254XXXXXXXXXX if valid, false otherwise.
 */
function validateAndNormalizePhoneNumber(phoneInput: unknown): string | false {
  // Handle array input
  let phone: unknown = phoneInput;
  if (Array.isArray(phoneInput)) {
    if (phoneInput.length === 0) return false;
    phone = phoneInput[0];
  }

  if (typeof phone !== 'string') return false;

  // Now we know phone is a string
  const cleaned = phone.replace(/\D/g, '');

  // Check if it's 10 digits starting with 0 (format: 0XXXXXXXXXX)
  if (/^0\d{9}$/.test(cleaned)) {
    // Convert 0XXXXXXXXXX to 254XXXXXXXXXX
    return '254' + cleaned.substring(1);
  }

  // Check if it's 12 digits starting with 254 (format: 254XXXXXXXXXX)
  if (/^254\d{9}$/.test(cleaned)) {
    return cleaned;
  }

  return false;
}

function isValidAmount(amount: any): boolean {
  return typeof amount === 'number' && amount > 0 && amount <= 1000000; // Reasonable limit
}

// POST /api/donations - Create a new donation record
export async function createDonationHandler(req: Request, res: Response): Promise<void> {
  try {
    const { amount, phoneNumber } = req.body;

    // Validate required fields
    if (amount === undefined || phoneNumber === undefined) {
      res.status(400).json({
        success: false,
        message: "Amount and phoneNumber are required"
      });
      return;
    }

    // Validate amount
    if (!isValidAmount(amount)) {
      res.status(400).json({
        success: false,
        message: "Amount must be a positive number"
      });
      return;
    }

    // Validate and normalize phone number
    const normalizedPhone = validateAndNormalizePhoneNumber(phoneNumber);
    if (!normalizedPhone) {
      res.status(400).json({
        success: false,
        message: "Invalid Kenyan phone number format. Use formats like 0712345678, 254712345678, or +254712345678"
      });
      return;
    }

    // Create the donation record
    const donation = await createDonation(amount, normalizedPhone);

    // Return success response
    res.status(201).json({
      success: true,
      message: "Donation record created successfully",
      data: {
        id: donation.id,
        amount: donation.amount,
        phoneNumber: donation.phoneNumber,
        status: donation.status,
        createdAt: donation.createdAt
      }
    });
  } catch (error) {
    console.error("Error creating donation:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
}

// GET /api/donations/:id - Get donation by ID
export async function getDonationHandler(req: Request, res: Response): Promise<void> {
  try {
    // Handle the case where req.params.id might be an array (though unlikely for :id route)
    const idParam = req.params.id;
    let id: number;
    if (Array.isArray(idParam)) {
      if (idParam.length === 0) {
        res.status(400).json({
          success: false,
          message: "Invalid donation ID"
        });
        return;
      }
      id = parseInt(idParam[0], 10);
    } else {
      id = parseInt(idParam, 10);
    }

    if (isNaN(id) || id <= 0) {
      res.status(400).json({
        success: false,
        message: "Invalid donation ID"
      });
      return;
    }

    const donation = await getDonationById(id);

    if (!donation) {
      res.status(404).json({
        success: false,
        message: "Donation not found"
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Donation retrieved successfully",
      data: donation
    });
  } catch (error) {
    console.error("Error retrieving donation:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
}