import express from "express";
import productController from "./product.controller.js";
import { upload } from "../../middle-ware/fileupluade.middleware.js";
const ProductController = new productController;
//configure the products routes
const productRouters = express.Router();

productRouters.get('/',ProductController.getAllProducts);
productRouters.post('/',upload.single('imageUrl'), ProductController.addProducts);


export default productRouters;