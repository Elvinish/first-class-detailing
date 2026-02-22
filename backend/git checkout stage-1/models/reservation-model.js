import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true },

    vehicle: { type: String, required: true, trim: true },
    vehicleType: { type: String, trim: true },

    service: { type: String, required: true, trim: true },

    preferredDate: { type: Date, required: true },
    preferredTime: { type: String, trim: true },

    notes: { type: String, trim: true },

    status: { type: String, default: "new" },
    source: { type: String, default: "web" },
  },
  { timestamps: true }
);

export default mongoose.model("Reservation", reservationSchema);
