// gallery.js

import chalk from "chalk";
import connection from "../../db";
import GalleryModel from "@/models/galleryModel";

export default async function handler(req, res) {
  await connection();

  try {
    const gallery = await GalleryModel.find({});
    res.status(200).json(gallery);
  } catch (error) {
    console.error(chalk.red("Error fetching gallery data:", error.message));
    res.status(500).json({ error: "Internal server error" });
  }
}
