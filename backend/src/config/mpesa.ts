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
  const required = [
    ["MPESA_CONSUMER_KEY", mpesaConfig.consumerKey],
    ["MPESA_CONSUMER_SECRET", mpesaConfig.consumerSecret],
    ["MPESA_SHORTCODE", mpesaConfig.shortcode],
    ["MPESA_PASSKEY", mpesaConfig.passkey],
  ];

  const missing = required
    .filter(([, value]) => !value)
    .map(([name]) => name);

  if (missing.length > 0) {
    throw new Error(
      `Missing M-Pesa environment variables: ${missing.join(", ")}`,
    );
  }
}
