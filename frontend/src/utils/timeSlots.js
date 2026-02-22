// value = "HH:MM" (например "09:30")
// label = "h:mm AM/PM" (например "9:30 AM")
export function to12hLabel(hhmm) {
  if (!hhmm) return "";
  const [hhStr, mmStr] = hhmm.split(":");
  const hh = Number(hhStr);
  const mm = Number(mmStr);

  const isPM = hh >= 12;
  const h12 = hh % 12 === 0 ? 12 : hh % 12;
  const ampm = isPM ? "PM" : "AM";

  return `${h12}:${String(mm).padStart(2, "0")} ${ampm}`;
}

export function buildTimeSlots({
  startHour = 8,
  endHour = 18,
  stepMinutes = 30,
} = {}) {
  const slots = [];
  for (let hour = startHour; hour < endHour; hour++) {
    for (let min = 0; min < 60; min += stepMinutes) {
      slots.push(
        `${String(hour).padStart(2, "0")}:${String(min).padStart(2, "0")}`
      );
    }
  }
  return slots;
}
