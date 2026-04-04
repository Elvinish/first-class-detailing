import { createContext, useContext } from "react";

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  // Send reservation to backend API
  async function createReservation(data) {
    // Map frontend fields -> backend fields
    const payload = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      vehicle: data.vehicle,
      vehicleType: data.vehicleType,
      service: data.service,
      preferredDate: data.date,
      preferredTime: data.time,
      notes: data.notes,
    };

    const API_BASE_URL = import.meta.env.VITE_API_URL || "";

    const response = await fetch(`${API_BASE_URL}/api/reservations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to create reservation");
    }

    return result;
  }

  const value = {
    createReservation,
  };

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error("useBooking must be used within BookingProvider");
  }
  return ctx;
}
