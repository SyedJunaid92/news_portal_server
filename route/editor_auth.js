import express from "express";
import {
  login,
  updateprofile,
  signup,
  all_editors,
  delete_editor,
  online_editor,
  warn_editor,
} from "../controller/editors.js";

const router = express.Router();
router.post("/editor/login", login);
router.post("/editor/updateprofile", updateprofile);
router.post("/editor/signup", signup);
router.get("/admin/alleditor", all_editors);
router.post("/admin/deleteeditor", delete_editor);
router.get("/editor/getdetail/:username", online_editor);
router.get("/editor/warn/:username", warn_editor);

export default router;
