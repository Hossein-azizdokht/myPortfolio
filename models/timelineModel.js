// galleryModel.js

import mongoose from "mongoose";

const timelineSchema = new mongoose.Schema({
  from: { type: String },
  fromfa: { type: String },
  to: { type: String },
  tofa: { type: String },
  stack: { type: String },
  company: { type: String },
  companyfa: { type: String },
});

const TimelineModel =
  mongoose.models.Timeline || mongoose.model("Timeline", timelineSchema);

export default TimelineModel;
