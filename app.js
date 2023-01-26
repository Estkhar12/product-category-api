import express from "express";
import category from "./src/routes/category.js";
import product from "./src/routes/product.js";
import cors from "cors";


// Start express app
const app = express();

//Setting cors
app.use(cors());

// Reading data from body
app.use(express.json());



// ROUTES
app.use("/api/category", category);
app.use("/api/product", product);

export default app;
