import "./ReservationForm.css";
import { SERVICES, VEHICLE_TYPES } from "../../utils/constants";
import { useBooking } from "../../contexts/BookingContext";
import { useBookingForm } from "../../hooks/useBookingForm";
import Button from "../Shared/Button";
import { buildTimeSlots, to12hLabel } from "../../utils/timeSlots";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { formatDateYMD } from "../../utils/dateFormat";
import { useMemo } from "react";

export default function ReservationForm() {
  const { createReservation, lastReservation } = useBooking();

  const {
    values,
    errors,
    submitting,
    submitted,
    handleChange,
    handleSubmit,
    resetForm,
  } = useBookingForm(createReservation);

  const timeSlots = buildTimeSlots({
    startHour: 0,
    endHour: 24,
    stepMinutes: 60,
  });

  const dateOptions = useMemo(
    () => ({
      dateFormat: "Y-m-d",
      minDate: "today",
      allowInput: false,
      disableMobile: true,
    }),
    []
  );

  return (
    <div className="reservation">
      <form className="reservation__form" onSubmit={handleSubmit}>
        <div className="reservation__row">
          <div className="reservation__field">
            <label htmlFor="name">Name *</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <p className="reservation__error">{errors.name}</p>}
          </div>

          <div className="reservation__field">
            <label htmlFor="phone">Phone *</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(425) 000-0000"
              value={values.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="reservation__error">{errors.phone}</p>
            )}
          </div>
        </div>

        <div className="reservation__row">
          <div className="reservation__field">
            <label htmlFor="email">Email (optional)</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={values.email}
              onChange={handleChange}
            />
          </div>

          <div className="reservation__field">
            <label htmlFor="vehicle">Vehicle model *</label>
            <input
              id="vehicle"
              name="vehicle"
              type="text"
              placeholder="BMW 3-Series 2019, Toyota Camry 2016..."
              value={values.vehicle}
              onChange={handleChange}
            />
            {errors.vehicle && (
              <p className="reservation__error">{errors.vehicle}</p>
            )}
          </div>
        </div>

        <div className="reservation__row">
          <div className="reservation__field">
            <label htmlFor="vehicleType">Vehicle type</label>
            <select
              id="vehicleType"
              name="vehicleType"
              value={values.vehicleType}
              onChange={handleChange}
            >
              {VEHICLE_TYPES.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="reservation__field">
            <label htmlFor="service">Detailing package *</label>
            <select
              id="service"
              name="service"
              value={values.service}
              onChange={handleChange}
            >
              <option value="">Select a package</option>
              {SERVICES.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name} (from ${service.fromPrice})
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="reservation__error">{errors.service}</p>
            )}
          </div>
        </div>

        <div className="reservation__row">
          <div className="reservation__field">
            <label htmlFor="date">Preferred date *</label>
            <Flatpickr
              value={values.date ?? ""}
              options={dateOptions}
              onChange={(selectedDates) => {
                const picked = selectedDates?.[0];
                const dateStr = picked ? formatDateYMD(picked) : "";
                handleChange({ target: { name: "date", value: dateStr } });
              }}
              id="date"
              name="date"
              placeholder="Select a date"
            />
            {errors.date && <p className="reservation__error">{errors.date}</p>}
          </div>

          <div className="reservation__field">
            <label htmlFor="time">Preferred time (optional)</label>
            <select
              id="time"
              name="time"
              value={values.time}
              onChange={handleChange}
            >
              <option value="">Select a time (optional)</option>
              {timeSlots.map((t) => (
                <option key={t} value={t}>
                  {to12hLabel(t)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="reservation__field">
          <label htmlFor="notes">
            Notes (kids, pets, stains, special requests...)
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            value={values.notes}
            onChange={handleChange}
            placeholder="Tell us anything important about your vehicle."
          />
        </div>

        <div className="reservation__actions">
          <Button type="submit" disabled={submitting} variant="primary">
            {submitting ? "Sending request..." : "Submit reservation request"}
          </Button>

          <button
            type="button"
            className="reservation__reset"
            onClick={resetForm}
          >
            Reset form
          </button>
        </div>

        {submitted && (
          <p className="reservation__success">
            Thank you! This is a demo — in production this form would send your
            request to email, WhatsApp or CRM. For now it’s saved locally so you
            can test the flow.
          </p>
        )}
      </form>

      {lastReservation && (
        <aside className="reservation__summary">
          <h3>Last reservation (demo)</h3>
          <p>
            <strong>{lastReservation.name}</strong> · {lastReservation.phone}
            {lastReservation.email && ` · ${lastReservation.email}`}
          </p>
          <p>
            {lastReservation.vehicleType} · {lastReservation.vehicle}
          </p>
          <p>
            Package:{" "}
            {SERVICES.find((s) => s.id === lastReservation.service)?.name ||
              lastReservation.service}
          </p>
          <p>
            Preferred: {lastReservation.date}{" "}
            {lastReservation.time && `at ${to12hLabel(lastReservation.time)}`}
          </p>
          {lastReservation.notes && <p>Notes: {lastReservation.notes}</p>}
        </aside>
      )}
    </div>
  );
}
