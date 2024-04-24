// gallery.js

import chalk from "chalk";
import connection from "../../db";
import TimelineModel from "@/models/timelineModel";

export default async function handler(req, res) {
  await connection();

  try {
    const timeline = await TimelineModel.find({});
    res.status(200).json(timeline);
  } catch (error) {
    console.error(chalk.red("Error fetching timeline data:", error.message));
    res.status(500).json({ error: "Internal server error" });
  }
}
