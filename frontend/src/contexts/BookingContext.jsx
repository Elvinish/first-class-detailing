import { createContext, useContext, useState } from "react";

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [lastReservation, setLastReservation] = useState(null);

  // Send reservation to backend API
  async function createReservation(data) {
    // Map frontend fields -> backend fields
    const payload = {
      ...data,
      preferredDate: data.date,
      preferredTime: data.time,
    };

    delete payload.date;
    delete payload.time;

    const response = await fetch("/api/reservations", {
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

    setLastReservation(result);
    return result;
  }

  const value = {
    lastReservation,
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
