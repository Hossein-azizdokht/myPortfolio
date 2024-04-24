// gallery.js

import chalk from "chalk";
import connection from "../../db";
import TestimationModel from "@/models/testimationModel";

export default async function handler(req, res) {
  await connection();

  try {
    const testimation = await TestimationModel.find({});
    res.status(200).json(testimation);
  } catch (error) {
    console.error(chalk.red("Error fetching testimation data:", error.message));
    res.status(500).json({ error: "Internal server error" });
  }
}
