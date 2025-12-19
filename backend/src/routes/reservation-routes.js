import { Router } from "express";
import { createReservation } from "../controllers/reservation-controller.js";

const router = Router();

router.post("/reservations", createReservation);

export default router;
