import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import * as CONSTANT from "./constant/constant.js";
import create_article from "./route/create_article.js";
import editor_auth from "./route/editor_auth.js";
import user_route from "./route/user_route.js";
import admin_route from "./route/admin.js";
import chat_route from "./route/chat_route.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", create_article);
app.use("/", editor_auth);
app.use("/", user_route);
app.use("/", admin_route);
app.use("/", chat_route);

mongoose
  .connect(CONSTANT.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(CONSTANT.PORT, () =>
      console.log(`Server is Running on PORT: ${CONSTANT.PORT}`)
    )
  )
  .catch((error) => {
    console.log(error);
  });
