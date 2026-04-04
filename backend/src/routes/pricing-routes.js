import { Router } from "express";
import { getPricing } from "../controllers/pricing-controller.js";

const router = Router();

router.get("/pricing", getPricing);

export default router;
