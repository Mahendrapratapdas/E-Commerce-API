import express from "express";
import productController from "./product.controller.js";

const ProductController = new productController;
//configure the products routes
const Route = express.Router();

Route.get('/',ProductController.getAllProducts);
Route.post('/',ProductController.addProducts);

export default Route;