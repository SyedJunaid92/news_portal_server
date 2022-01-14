import mongoose from "mongoose";

const schema = mongoose.Schema({
  chat: {
    msg: { type: String },
    username: { type: String },
    date: { type: String },
    email: { type: String },
  },
});

export default mongoose.model("chat", schema);
