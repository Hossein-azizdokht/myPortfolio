// galleryModel.js

import mongoose from "mongoose";

const articlesSchema = new mongoose.Schema({
  title: { type: String },
  desc: { type: String },
  cover: { type: String },
  date: { type: String },
  body: { type: String },
});

const ArticlesModel =
  mongoose.models.Articles || mongoose.model("Articles", articlesSchema);

export default ArticlesModel;
