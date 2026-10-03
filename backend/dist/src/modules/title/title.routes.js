import { Router } from "express";
import { authenticate } from "../../middleware/auth.middleware.js";
import { create, getById, list, remove, update, } from "./title.controller.js";
const router = Router();
router.use(authenticate);
router.post("/", create);
router.get("/", list);
router.get("/:id", getById);
router.patch("/:id", update);
router.delete("/:id", remove);
export default router;
//# sourceMappingURL=title.routes.js.map