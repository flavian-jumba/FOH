import mpesaRouter from "./routes/mpesa.ts";
import donationsRouter from "./routes/donations.ts";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { validateMpesaConfig } from "./config/mpesa";

dotenv.config();
validateMpesaConfig();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
  }),
);

app.use(express.json());

app.use("/api/mpesa", mpesaRouter);
app.use("/api/donations", donationsRouter);

app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Simply Feminine Network backend is running",
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});