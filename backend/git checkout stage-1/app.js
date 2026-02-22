import express from "express";
import cors from "cors";

import healthRoutes from "./routes/health-routes.js";
import errorMiddleware from "./middlewares/error-middleware.js";
import reservationRoutes from "./routes/reservation-routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", healthRoutes);
app.use("/api", reservationRoutes);

app.use(errorMiddleware);

export default app;
