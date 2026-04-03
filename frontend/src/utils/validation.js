export function validateReservation(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (values.phone.replace(/\D/g, "").length < 10) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.service) {
    errors.service = "Select a detailing package.";
  }

  if (!values.date) {
    errors.date = "Choose a preferred date.";
  }

  if (!values.vehicle.trim()) {
    errors.vehicle = "Tell us your vehicle model.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Enter a valid email.";
  }

  if (!values.time) {
    errors.time = "Select a preferred time.";
  }

  return errors;
}
