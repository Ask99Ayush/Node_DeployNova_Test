const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Use environment variable (provided by docker-compose)
    const MONGO_URL = process.env.MONGO_URL || "mongodb://ems-mongo:27017/employees";

    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected:", MONGO_URL);
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;

