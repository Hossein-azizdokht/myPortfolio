// gallery.js

import chalk from "chalk";
import connection from "../../db";
import ArticlesModel from "@/models/articlesModel";

export default async function handler(req, res) {
  await connection();

  try {
    const articles = await ArticlesModel.find({});
    res.status(200).json(articles);
  } catch (error) {
    console.error(chalk.red("Error fetching articles data:", error.message));
    res.status(500).json({ error: "Internal server error" });
  }
}
