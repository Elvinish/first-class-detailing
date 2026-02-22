import Reservation from "../models/reservation-model.js";

export function createReservation(data) {
  return Reservation.create(data);
}
