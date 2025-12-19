import mongoose from "mongoose";

export async function connectDB() {
  const { MONGODB_URI } = process.env;

  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is missing in .env");
  }

  //connection to Atlas

  await mongoose.connect(MONGODB_URI);

  console.log("[backend] MongoDB connected");
}
