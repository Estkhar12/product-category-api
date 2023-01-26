import express from "express";
import {
  createCotegory,
  deleteCategory,
  getAllCategory,
  getSingleCategory,
  updateCategory,
} from "../controllers/category.js";

const router = express.Router();

// Category Routes
router.post("/", createCotegory);

router.get("/", getAllCategory);

router.get("/:id", getSingleCategory);

router.patch("/:id", updateCategory);

router.delete("/:id", deleteCategory);

export default router;
