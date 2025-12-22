import { Router } from "express";
import { createReservation } from "../controllers/reservation-controller.js";
import validateRequest from "../middlewares/validate-request.js";
import { createReservationSchema } from "../validators/reservation-validator.js";

const router = Router();

router.post(
  "/reservations",
  validateRequest(createReservationSchema),
  createReservation
);

export default router;
