export default function errorMiddleware(err, req, res, next) {
  // Basic centralized error handler
  const statusCode = err.statusCode || 500;

  // Log full error on server side
  console.error("[backend:error]", err);

  // Don't leak stack traces to client
  const response = {
    message: err.message || "Server error",
  };

  if (err.name === "ValidationError" && Array.isArray(err.details)) {
    response.details = err.details;
  }

  res.status(statusCode).json(response);
}
