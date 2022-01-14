import express from "express";
import {
  all_user,
  user_signin,
  user_signup,
  delete_user,
} from "../controller/user.js";

const router = express.Router();

router.get("/user/alluser", all_user);
router.post("/user/signin", user_signin);
router.post("/user/signup", user_signup);
router.post("/user/deleteuser", delete_user);
export default router;
