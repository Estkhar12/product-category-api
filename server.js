import mongoose from "mongoose";
import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();



mongoose.set("strictQuery", true);

// Connect to Database
mongoose.connect(process.env.MONGO_URI);

// Listening DB connection
const db = mongoose.connection;
db.on("connected", () => {
  console.log("database connected!");
});

// listing on the Port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server runnig on port ${port}...`);
});
