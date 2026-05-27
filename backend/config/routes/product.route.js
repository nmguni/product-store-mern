import express from 'express';
import Porducts from "../models/product.model.js"
import mongoose from 'mongoose';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../../controllers/product.controller.js';

const router = express.Router();

// Everything will be prefixed with /api/prodcuts/ from the server file 

router.get("/", getProducts)
router.post("/", createProduct)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)

export default router;