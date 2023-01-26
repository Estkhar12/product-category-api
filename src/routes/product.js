import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
} from "../controllers/product.js";


const router = express.Router();

// Product Routes
router.post("/", createProduct);

router.get("/", getAllProduct);

router.get("/:id", getSingleProduct);

router.patch("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;
