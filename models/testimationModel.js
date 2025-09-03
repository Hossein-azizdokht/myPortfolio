// galleryModel.js

import mongoose from "mongoose";

const testimationSchema = new mongoose.Schema({
  from: { type: String },
  fromfa: { type: String },
  to: { type: String },
  tofa: { type: String },
  stack: { type: String },
  company: { type: String },
  companyfa: { type: String },
});

const TestimationModel =
  mongoose.models.Testimation ||
  mongoose.model("Testimation", testimationSchema);

export default TestimationModel;
