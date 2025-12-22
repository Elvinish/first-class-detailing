import Joi from "joi";

export const createReservationSchema = Joi.object({
  name: Joi.string().trim().min(2).max(60).required(),
  phone: Joi.string().trim().min(7).max(30).required(),
  email: Joi.string().trim().email().allow("").optional(),

  vehicle: Joi.string().trim().min(2).max(120).required(),
  vehicleType: Joi.string().trim().max(30).optional(),

  service: Joi.string().trim().required(), // we'll enforce allowed values later

  preferredDate: Joi.date().required(),
  preferredTime: Joi.string().trim().max(10).allow("").optional(),

  notes: Joi.string().trim().max(1000).allow("").optional(),
});
