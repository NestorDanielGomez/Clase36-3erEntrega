import Handler from "express-async-handler";
import { Router } from "express";
import { BrandsController } from "../controllers";

const router = new Router();

router.get("/", Handler(BrandsController.getAllBrands));
router.get("/:id", Handler(BrandsController.getBrandById));
router.post("/", Handler(BrandsController.createBrand));
router.put("/:id", Handler(BrandsController.updateBrand));
router.delete("/:id", Handler(BrandsController.deleteBrand));

export default router;
