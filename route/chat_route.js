import express from "express";
import { chatting, roomChat } from "../controller/chat.js";

const router = express.Router();

router.post("/chat", chatting);
router.get("/chat", roomChat);
export default router;
