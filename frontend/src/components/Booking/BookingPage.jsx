import "./BookingPage.css";
import ReservationForm from "./ReservationForm";

export default function BookingPage() {
  return (
    <section id="booking" className="booking section">
      <div className="booking__grid">
        {/* LEFT SIDE */}
        <div className="booking__info">
          <p className="booking__kicker">Reserve your spot</p>
          <h2 className="booking__title">Book a first class wash & detail</h2>

          <p className="booking__text">
            Send your preferred date and package. We’ll confirm availability and
            exact pricing based on your vehicle size and condition.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="booking__card">
          <ReservationForm />
        </div>
      </div>
    </section>
  );
}
