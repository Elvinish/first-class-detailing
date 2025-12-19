import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const { PORT = 4000 } = process.env;

async function start() {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`[backend] server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("[backend] failed to start:", err.message);
    process.exit(1);
  }
}

start();
