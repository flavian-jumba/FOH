import { Router } from "express";
import { getMpesaAccessToken } from "../services/mpesaAuth.ts";
import { getDonationById, Donation, updateDonation } from "../services/donationService.ts";
import { db } from "../config/database.ts";

const router = Router();

router.get("/auth-test", async (_req, res) => {
  try {
    const token = await getMpesaAccessToken();

    res.status(200).json({
      success: true,
      message: "M-Pesa authentication successful",
      tokenReceived: Boolean(token),
    });
  } catch (error) {
    console.error("M-Pesa authentication error:", error);

    res.status(500).json({
      success: false,
      message: "M-Pesa authentication failed",
    });
  }
});

// POST /api/mpesa/callback - Handle M-Pesa STK push callback
router.post("/callback", async (req, res) => {
  try {
    // Log receipt of callback (without sensitive data)
    console.log("[M-Pesa Callback] Received callback");

    // Parse the callback body
    const { Body: { stkCallback } } = req.body;

    if (!stkCallback) {
      console.error("[M-Pesa Callback] Invalid callback format");
      // Still return success to avoid retries
      res.status(200).json({ ResultCode: 0, ResultDescription: "Accepted" });
      return;
    }

    const { MerchantRequestID, CheckoutRequestID, ResultCode, ResultDescription, CallbackMetadata } = stkCallback;

    console.log(`[M-Pesa Callback] CheckoutRequestID: ${CheckoutRequestID}`);
    console.log(`[M-Pesa Callback] ResultCode: ${ResultCode}`);
    console.log(`[M-Pesa Callback] ResultDescription: ${ResultDescription}`);

    // Find donation by CheckoutRequestID
    const donationRow = db.prepare(
      "SELECT id, amount, phoneNumber, status, mpesaReceiptNumber, checkoutRequestId, merchantRequestId, createdAt, updatedAt FROM donations WHERE checkoutRequestId = ?"
    ).get(CheckoutRequestID) as Donation | undefined;

    if (!donationRow) {
      console.warn(`[M-Pesa Callback] No donation found for CheckoutRequestID: ${CheckoutRequestID}`);
      // Still return success to avoid retries
      res.status(200).json({ ResultCode: 0, ResultDescription: "Accepted" });
      return;
    }

    // Check if donation is already processed (idempotency)
    if (donationRow.status === 'SUCCESS' || donationRow.status === 'FAILED') {
      console.info(`[M-Pesa Callback] Donation ${donationRow.id} already processed with status: ${donationRow.status}`);
      res.status(200).json({ ResultCode: 0, ResultDescription: "Accepted" });
      return;
    }

    // Determine payment status based on ResultCode
    let newStatus: Donation['status'] = 'FAILED';
    let mpesaReceiptNumber: string | null = null;

    if (ResultCode === 0) {
      newStatus = 'SUCCESS';
      // Extract MpesaReceiptNumber from CallbackMetadata
      const receiptItem = CallbackMetadata?.Item?.find((item: { Name: string; Value: unknown }) => item.Name === "MpesaReceiptNumber");
      mpesaReceiptNumber = receiptItem ? String(receiptItem.Value) : null;
      console.log(`[M-Pesa Callback] Payment successful. Receipt: ${mpesaReceiptNumber}`);
    } else {
      console.log(`[M-Pesa Callback] Payment failed or cancelled. ResultCode: ${ResultCode}`);
    }

    // Update the donation
    const updatedDonation = await updateDonation(donationRow.id, {
      status: newStatus,
      mpesaReceiptNumber: mpesaReceiptNumber
    });

    if (!updatedDonation) {
      console.error(`[M-Pesa Callback] Failed to update donation ${donationRow.id}`);
      // Still return success to avoid retries
      res.status(200).json({ ResultCode: 0, ResultDescription: "Accepted" });
      return;
    }

    console.log(`[M-Pesa Callback] Donation ${donationRow.id} updated to status: ${newStatus}`);

    // Return success to M-Pesa
    res.status(200).json({ ResultCode: 0, ResultDescription: "Accepted" });
  } catch (error) {
    console.error("[M-Pesa Callback] Error processing callback:", error);
    // Always return success to M-Pesa to avoid retries
    res.status(200).json({ ResultCode: 0, ResultDescription: "Accepted" });
  }
});

export default router;