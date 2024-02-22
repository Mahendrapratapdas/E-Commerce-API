import express from "express";
import productController from "./product.controller.js";
import { upload } from "../../middle-ware/fileupluade.middleware.js";
const ProductController = new productController;
//configure the products routes
const productRouters = express.Router();

productRouters.post('/rate',ProductController.rateProducts);
productRouters.get('/filter',ProductController.filterProduct);
productRouters.get('/',(req,res)=>{
    ProductController.getAllProducts(req,res);
});
productRouters.post('/',upload.single('imageUrl'), (req,res)=>{
    ProductController.addProducts(req,res);
});
productRouters.get('/:id',(req,res)=>{
    ProductController.getOneProducts(req,res);
});


export default productRouters;