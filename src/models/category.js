import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Creating Category Schema
const categorySchema = new Schema({
  categoryName: {
    type: String,
    required: [true, "Category name is required!"],
    unique: true
  },
});

// Creating Category Model
const Category = mongoose.model("Category", categorySchema);

export default Category;
