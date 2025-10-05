import mongoose from "mongoose";
import chalk from "chalk";

const connection = async () => {
  if (mongoose.connections[0].readyState) return; // use existing connection

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(chalk.green("Connected to MongoDB Atlas"));
  } catch (error) {
    console.error(chalk.red("MongoDB connection error:", error.message));
  }
};

export default connection;
