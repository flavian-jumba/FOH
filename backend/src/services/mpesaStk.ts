import { mpesaConfig } from "../config/mpesa.ts";
import { getMpesaAccessToken } from "./mpesaAuth.ts";

// Helper to generate timestamp in format: YYYYMMDDHHmmss
export function generateTimestamp(): string {
  const now = new Date();
  // Pad with zeros
  const pad = (num: number) => String(num).padStart(2, '0');
  return `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
}

// Generate password: Base64 encoding of (shortcode + passkey + timestamp)
export function generatePassword(shortcode: string, passkey: string, timestamp: string): string {
  const data = shortcode + passkey + timestamp;
  return Buffer.from(data).toString('base64');
}

export interface StkPushRequest {
  BusinessShortCode: string;
  Password: string;
  Timestamp: string;
  TransactionType: string; // For STK push, it's "CustomerPayBillOnline"
  Amount: number;
  PartyA: string; // phone number of customer
  PartyB: string; // shortcode
  PhoneNumber: string; // customer phone number
  CallBackURL: string; // URL where M-Pesa will send callback
  AccountReference: string; // optional, but we can use something like "DonationID"
  TransactionDesc: string; // description
}

export interface StkPushResponse {
  MerchantRequestID: string;
  CheckoutRequestID: string;
  ResponseCode: string;
  ResponseDescription: string;
  CustomerMessage: string;
}

/**
 * Sends STK push request to M-Pesa Daraja API.
 */
export async function initiateStkPush(
  amount: number,
  phoneNumber: string,
  accountReference: string = "Donation",
  transactionDesc: string = "Donation payment"
): Promise<StkPushResponse> {
  const { environment, consumerKey, consumerSecret, shortcode, passkey, callbackUrl } = mpesaConfig;

  if (!shortcode || !passkey || !callbackUrl) {
    throw new Error("M-Pesa STK push configuration is missing (shortcode, passkey, or callbackUrl)");
  }

  // Get access token
  const accessToken = await getMpesaAccessToken();

  const timestamp = generateTimestamp();
  const password = generatePassword(shortcode, passkey, timestamp);

  const requestData: StkPushRequest = {
    BusinessShortCode: shortcode,
    Password: password,
    Timestamp: timestamp,
    TransactionType: "CustomerPayBillOnline",
    Amount: amount,
    PartyA: phoneNumber, // customer phone number (the one paying)
    PartyB: shortcode,   // organization shortcode
    PhoneNumber: phoneNumber, // same as PartyA
    CallBackURL: callbackUrl,
    AccountReference: accountReference,
    TransactionDesc: transactionDesc,
  };

  const baseUrl =
    environment === "production"
      ? "https://api.safaricom.co.ke"
      : "https://sandbox.safaricom.co.ke";

  const response = await fetch(`${baseUrl}/mpesa/stkpush/v1/processrequest`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `M-Pesa STK push failed (${response.status}): ${errorText}`
    );
  }

  const data = (await response.json()) as StkPushResponse;
  return data;
}