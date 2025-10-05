// galleryModel.js

import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    title: { type: String },
    desc: { type: String },
    cover: { type: String },
    icons: { type: Array },
  },
  { collection: "galleries" } // explicitly define collection name
);

const GalleryModel =
  mongoose.models.Gallery || mongoose.model("Gallery", gallerySchema);

export default GalleryModel;
