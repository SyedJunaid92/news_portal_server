import mongoose from "mongoose";
const schema = mongoose.Schema({
  username: { type: String },
  name: { type: String },
  password: { type: String },
  email: { type: String },
  active: { type: Boolean, default: false },
  warn: { type: Number, default: 0 },
});

export default mongoose.model("Editor", schema);
