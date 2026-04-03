import { createReservation } from "../repositories/reservation-repository.js";
import {
  sendBookingEmail,
  sendCustomerConfirmationEmail,
} from "../utils/email.js";

export async function createReservationService(payload) {
  const saved = await createReservation(payload);

  // Send email notification without blocking request
  sendBookingEmail(saved).catch((err) => {
    console.error("[email] failed to send:", err.message);
  });

  sendCustomerConfirmationEmail(saved).catch((err) => {
    console.error("[email][customer] failed to send:", err.message);
  });

  return saved;
}
