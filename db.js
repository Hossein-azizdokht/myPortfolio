// db.js

import chalk from "chalk";
import mongoose from "mongoose";

const connection = async () => {
  try {
    // await mongoose.connect("mongodb://127.0.0.1:27017/portfolio");
    await mongoose.connect(
      "mongodb+srv://admin:vt8GxaKno119Bwkd@cluster0.tywnjio.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/portfolio"
    );
    console.log(chalk.green("Connected to MongoDB"));
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

export default connection;
