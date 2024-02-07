import productModel from "./product.model.js";
export default class productController{
    getAllProducts(req,res){
        const product = productModel.getAll();
        res.status(200).send(product);
    }
    addProducts(req,res){

    }
    rateProducts(req,res){

    }
    getOneProducts(req,res){

    }
}