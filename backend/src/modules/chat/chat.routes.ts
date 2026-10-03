import { Router } from "express";
import { authenticate } from "../../middleware/auth.middleware.js";
import {
  getMessages,
  sendMessage,
} from "./chat.controller.js";

const router = Router();

router.use(authenticate);

router.get("/:watchSpaceId/messages", getMessages);
router.post("/:watchSpaceId/messages", sendMessage);

export default router;
