import Handler from "express-async-handler";
import { Router } from "express";
import { VarietalController } from "../controllers";

const router = new Router();

router.get("/", Handler(VarietalController.getAllVarietals));
router.get("/:id", Handler(VarietalController.getVarietalById));
router.post("/", Handler(VarietalController.createVarietal));
router.put("/:id", Handler(VarietalController.updateVarietal));
router.delete("/:id", Handler(VarietalController.deleteVarietal));

export default router;
