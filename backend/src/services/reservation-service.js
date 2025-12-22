import { createReservation } from "../repositories/reservation-repository.js";
import { sendBookingEmail } from "../utils/email.js";

export async function createReservationService(payload) {
  const saved = await createReservation(payload);

  // Send email notification without blocking request
  sendBookingEmail(saved).catch((err) => {
    console.error("[email] failed to send:", err.message);
  });

  return saved;
}
