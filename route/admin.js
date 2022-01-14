import express from "express";
import {
  admin_retrive,
  admin_signin,
  admin_signup,
  admin_update,
} from "../controller/admin.js";

const router = express.Router();
router.get("/admin/retrive", admin_retrive);
router.put("/admin/update", admin_update);
router.post("/admin/login", admin_signin);
router.post("/admin/signUp", admin_signup);

export default router;
