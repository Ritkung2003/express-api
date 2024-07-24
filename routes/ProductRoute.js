import express from "express";
import { ProductGetAll } from "../controllers/ProductController.js";

const ProductRoute = express.Router();

// Create - POST

// ReadAll - GET
ProductRoute.get('/getall', ProductGetAll);

// ReadById - GET

// Update - PUT

// Delete - DELETE

export default ProductRoute;