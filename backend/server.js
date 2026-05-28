import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import prodoductRoutes from "./config/routes/product.route.js"

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000

// middle ware function runs before sending request to API
app.use(express.json()) // allows us to use JSON data in the req.body

app.use("/api/products", prodoductRoutes)

app.listen(PORT, () => {
   connectDB()
   console.log('Server started at http://localhost:' + PORT);
})


