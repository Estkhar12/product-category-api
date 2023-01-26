import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Creating Product Schema
const productSchema = new Schema({
  productName: {
    type: String,
    required: [true, "Product name is required!"],
  },
  qtyPerUnit: {
    type: Number,
    required: [true, "Quantity of the Product is required!"],
  },
  unitPrice: {
    type: Number,
    required: [true, "Unit Price of the Product is required!"],
  },
  unitInStock: {
    type: String,
    required: true,
  },
  discontinued: {
    type: Boolean,
    default: false,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  }
});

// Creating Product Model.
const Product = mongoose.model("Product", productSchema);

export default Product;
