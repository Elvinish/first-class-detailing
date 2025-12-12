import { useState } from "react";
import { validateReservation } from "../utils/validation";
import { VEHICLE_TYPES } from "../utils/constants";
import { simplePhoneMask } from "../vendor/maskPhone";

const initialValues = {
  name: "",
  phone: "",
  email: "",
  vehicle: "",
  vehicleType: VEHICLE_TYPES[0],
  service: "",
  date: "",
  time: "",
  notes: "",
};

export function useBookingForm(onSubmit) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setValues((prev) => {
      if (name === "phone") {
        return { ...prev, phone: simplePhoneMask(value) };
      }
      return { ...prev, [name]: value };
    });

    // очищаем ошибку для конкретного поля при изменении
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validateReservation(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setSubmitting(true);
      await onSubmit(values); // вызов функции из контекста
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  function resetForm() {
    setValues(initialValues);
    setErrors({});
    setSubmitted(false);
  }

  return {
    values,
    errors,
    submitting,
    submitted,
    handleChange,
    handleSubmit,
    resetForm,
  };
}
