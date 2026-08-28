import dotenv from "dotenv";

dotenv.config();

export const mpesaConfig = {
  environment: process.env.MPESA_ENVIRONMENT || "sandbox",
  consumerKey: process.env.MPESA_CONSUMER_KEY || "",
  consumerSecret: process.env.MPESA_CONSUMER_SECRET || "",
  shortcode: process.env.MPESA_SHORTCODE || "",
  passkey: process.env.MPESA_PASSKEY || "",
  callbackUrl: process.env.MPESA_CALLBACK_URL || "",
};

export function validateMpesaConfig(): void {
  // Validate authentication credentials (required for all operations)
  const requiredForAuth = [
    ["MPESA_CONSUMER_KEY", mpesaConfig.consumerKey],
    ["MPESA_CONSUMER_SECRET", mpesaConfig.consumerSecret],
  ];

  const missingAuth = requiredForAuth
    .filter(([, value]) => !value)
    .map(([name]) => name);

  if (missingAuth.length > 0) {
    throw new Error(
      `Missing M-Pesa environment variables for authentication: ${missingAuth.join(", ")}`,
    );
  }

  // Warn about STK push specific credentials (required for STK push but not for auth)
  const requiredForStk = [
    ["MPESA_SHORTCODE", mpesaConfig.shortcode],
    ["MPESA_PASSKEY", mpesaConfig.passkey],
    ["MPESA_CALLBACK_URL", mpesaConfig.callbackUrl],
  ];

  const missingStk = requiredForStk
    .filter(([, value]) => !value)
    .map(([name]) => name);

  if (missingStk.length > 0) {
    console.warn(
      `Missing M-Pesa environment variables for STK push: ${missingStk.join(", ")}. These are required for STK push operations.`
    );
  }
}
