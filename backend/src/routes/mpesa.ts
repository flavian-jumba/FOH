import { Router } from "express";
import { getMpesaAccessToken } from "../services/mpesaAuth.js";

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

export default router;
