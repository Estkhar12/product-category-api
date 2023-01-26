import Category from "../models/category.js";

// CREATE NEW CATEGORY
export const createCotegory = async (req, res, next) => {
  const { categoryName } = req.body;
  try {
    const newCategory = await Category.create({
      categoryName,
    });
    res.status(200).json({
      message: "success",
      data: newCategory,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed!",
      message: error.message,
    });
  }
};

//GET ALL CATEGORIES
export const getAllCategory = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.status(200).json({
      message: "success",
      data: categories,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed!",
      message: error.message,
    });
  }
};

// GET SINGLE CATEGORY
export const getSingleCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
    res.status(200).json({
      message: "success",
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed!",
      message: error.message,
    });
  }
};

// UPDATE CATEGORY
export const updateCategory = async (req, res, next) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      message: "success",
      data: updatedCategory,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed!",
      message: error.message,
    });
  }
};

// DELETE CATEGORY
export const deleteCategory = async (req, res, next) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "category deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "failed!",
      message: error.message,
    });
  }
};
