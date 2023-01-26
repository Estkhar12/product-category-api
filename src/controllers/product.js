import Product from "../models/product.js";

// CREATE NEW PRODUCT
export const createProduct = async (req, res, next) => {
  const {
    productName,
    qtyPerUnit,
    unitPrice,
    unitInStock,
    discontinued,
    categoryId,
  } = req.body;
  try {
    const createdProduct = await Product.create({
      productName,
      qtyPerUnit,
      unitPrice,
      unitInStock,
      discontinued,
      categoryId,
    });
    res.status(200).json({
      message: "success",
      data: createdProduct,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed!",
      message: error.message,
    });
  }
};

//GET ALL PRODUCTS
export const getAllProduct = async (req, res, next) => {
  try {
    const allProducts = await Product.find().populate("categoryId");
    res.status(200).json({
      message: "success",
      data: allProducts,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed!",
      message: error.message,
    });
  }
};

// GET SINGLE PRODUCT
export const getSingleProduct = async (req, res, next) => {
  try {
    const singleProduct = await Product.findById(req.params.id).populate(
      "categoryId"
    );
    res.status(200).json({
      message: "success",
      data: singleProduct,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed!",
      message: error.message,
    });
  }
};

// UPDATE PRODUCT
export const updateProduct = async (req, res, next) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).json({
      message: "success",
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed!",
      message: error.message,
    });
  }
};

// DELETE PRODUCT
export const deleteProduct = async (req, res, next) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "success",
    });
  } catch (error) {
    res.status(500).json({
      status: "failed!",
      message: error.message,
    });
  }
};
