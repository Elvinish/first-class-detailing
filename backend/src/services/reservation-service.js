import { createReservation } from "../repositories/reservation-repository.js";

export async function createReservationService(payload) {
  // just save
  const saved = await createReservation(payload);
  return saved;
}
