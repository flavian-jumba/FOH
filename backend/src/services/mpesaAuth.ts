import { mpesaConfig } from "../config/mpesa.js";

export async function getMpesaAccessToken(): Promise<string> {
  const { consumerKey, consumerSecret, environment } = mpesaConfig;

  if (!consumerKey || !consumerSecret) {
    throw new Error("M-Pesa consumer credentials are missing");
  }

  const baseUrl =
    environment === "production"
      ? "https://api.safaricom.co.ke"
      : "https://sandbox.safaricom.co.ke";

  const credentials = Buffer.from(
    `${consumerKey}:${consumerSecret}`,
  ).toString("base64");

  const response = await fetch(
    `${baseUrl}/oauth/v1/generate?grant_type=client_credentials`,
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${credentials}`,
      },
    },
  );

  if (!response.ok) {
    const errorText = await response.text();

    throw new Error(
      `M-Pesa authentication failed (${response.status}): ${errorText}`,
    );
  }

  const data = (await response.json()) as {
    access_token?: string;
  };

  if (!data.access_token) {
    throw new Error("M-Pesa response did not contain an access token");
  }

  return data.access_token;
}
