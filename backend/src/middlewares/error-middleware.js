export default function errorMiddleware(err, req, res, next) {
  console.error("[backend:error]", err);
  res.status(500).json({ message: "Server error" });
}
