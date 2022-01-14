import express from "express";
import {
  create_article,
  delete_article,
  update_article,
  getarticle,
  all_article,
  article_status,
} from "../controller/create_article.js";

const router = express.Router();

router.post("/createarticle", create_article);
router.get("/deletearticle/:uuid", delete_article);
router.post("/updatearticle", update_article);
router.get("/getarticle/:author", getarticle);
router.get("/allarticle", all_article);
router.post("/admin/articlestatus", article_status);
export default router;
