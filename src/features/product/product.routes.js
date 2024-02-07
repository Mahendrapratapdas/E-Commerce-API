import express from "express";
import productController from "./product.controller.js";

const ProductController = new productController;
//configure the products routes
const productRouters = express.Router();

productRouters.get('/',ProductController.getAllProducts);
productRouters.post('/',ProductController.addProducts);

export default productRouters;