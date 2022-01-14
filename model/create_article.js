import mongoose from "mongoose";
const schema = mongoose.Schema({
  title: { type: String },
  body: { type: String },
  author: { type: String },
  image: { type: String },
  tags: { type: Array },
  like: { type: String, default: 0 },
  dislike: { type: String, default: 0 },
  status: { type: String, default: false },
  uuid: { type: String },
  plag: { type: String },
});

export default mongoose.model("Artcles", schema);
