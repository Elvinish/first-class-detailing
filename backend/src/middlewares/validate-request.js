import ValidationError from "../errors/validation-error.js";

export default function validateRequest(schema) {
  return (req, res, next) => {
    // Validate request body at the boundary (before controller)
    const { error, value } = schema.validate(req.body, {
      abortEarly: false, // collect all errors, not just the first one
      stripUnknown: true, // remove fields that are not in schema
    });

    if (error) {
      const details = error.details.map((d) => ({
        path: d.path.join("."),
        message: d.message,
      }));

      return next(new ValidationError("Invalid request body", details));
    }

    // Use the sanitized value further down the pipeline
    req.body = value;
    return next();
  };
}
