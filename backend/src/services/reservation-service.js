import { createReservation } from "../repositories/reservation-repository.js";
import {
  sendBookingEmail,
  sendCustomerConfirmationEmail,
} from "../utils/email.js";
import { calculatePrice } from "../utils/pricing.js";

export async function createReservationService(payload) {
  const estimatedTotal = calculatePrice(payload.service, payload.vehicleType);
  const saved = await createReservation({
    ...payload,
    estimatedTotal,
  });

  // Send email notification without blocking request
  sendBookingEmail(saved).catch((err) => {
    console.error("[email] failed to send:", err.message);
  });

  // sendCustomerConfirmationEmail(saved).catch((err) => {
  //   console.error("[email][customer] failed to send:", err.message);
  // });

  return saved;
}
