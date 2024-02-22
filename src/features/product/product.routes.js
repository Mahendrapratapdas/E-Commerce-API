import express from "express";
import productController from "./product.controller.js";
import { upload } from "../../middle-ware/fileupluade.middleware.js";
const ProductController = new productController;
//configure the products routes
const productRouters = express.Router();

//Routes for Rate the Product
productRouters.post('/rate',(req,res)=>{
    ProductController.rateProducts(req,res);
});
//Routes for filter the Product
productRouters.get('/filter',(req,res)=>{
    ProductController.filterProduct(req,res);
});
//Routes for Get ALL the Products
productRouters.get('/',(req,res)=>{
    ProductController.getAllProducts(req,res);
});
//Routes for Add the Product
productRouters.post('/',upload.single('imageUrl'), (req,res)=>{
    ProductController.addProducts(req,res);
});
//Routes for getOne Product
productRouters.get('/:id',(req,res)=>{
    ProductController.getOneProducts(req,res);
});


export default productRouters;