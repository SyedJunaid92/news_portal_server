import mongoose from "mongoose";
const schema = mongoose.Schema({
  username: { type: String },
  name: { type: String },
  password: { type: String },
  email: { type: String },
});

export default mongoose.model("admin", schema);
