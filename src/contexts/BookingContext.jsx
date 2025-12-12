import { createContext, useContext, useState } from "react";

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [lastReservation, setLastReservation] = useState(null);

  // имитация "запроса", здесь можно будет подключить реальный backend
  async function createReservation(data) {
    console.log("Reservation request:", data);

    setLastReservation({
      ...data,
      createdAt: new Date().toISOString(),
    });

    // задержка чтобы выглядело как запрос
    await new Promise((resolve) => setTimeout(resolve, 400));
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
