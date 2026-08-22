import { Router } from "express";
import { createDonationHandler, getDonationHandler } from "../controllers/donationsController.ts";

const router = Router();

// POST /api/donations - Create a new donation record
router.post("/", createDonationHandler);

// GET /api/donations/:id - Get donation by ID
router.get("/:id", getDonationHandler);

export default router;