import { createReservationService } from "../services/reservation-service.js";

export async function createReservation(req, res, next) {
  try {
    const saved = await createReservationService(req.body);
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
}
