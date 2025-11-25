const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
  console.error("❌ MONGO_URL not found in environment variables");
  process.exit(1);
}

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  try {
    const connection = await mongoose.connect(MONGO_URL);
    isConnected = connection.connections[0].readyState;
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Error:", err);
  }
};

connectDB();

module.exports = mongoose;
