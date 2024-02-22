import appError from "../../middle-ware/error.middleware.js";
import productModel from "./product.model.js";
import ProductRepository from "./product.repository.js";

export default class productController{
    constructor(){
        this.productRepository = new ProductRepository();
    }

    async addProducts(req,res){
        try{
            const {name , desc , size, price, catagory} = req.body;
            const newProduct = new productModel(name, desc, req.file.filename, size.split(','),parseFloat(price), catagory)
            const createdProduct = await this.productRepository.add(newProduct);
            res.status(201).send(createdProduct);
        }catch(err){
            console.log(err);
            throw new appError(500,"Somethings want wrong........");
        }
        
    }
    async getAllProducts(req,res){
        try{
            const products = await this.productRepository.getAll();
            res.status(200).send(products);
        }catch(err){
            console.log(err);
            throw new appError(500,"Somethings want wrong........");
        }
    }
    async getOneProducts(req,res){
        try{
            const id = req.params.id;
            const product = await this.productRepository.get(id); 
            if(!product){
                res.status(404).send('Product not found');
            }
            else{
                res.status(200).send(product);
            }
        }catch(err){
            console.log(err);
            throw new appError(500,"Somethings want wrong........");
        }  
    }
    async filterProduct(req,res){
        try{
            const minPrice = req.query.minPrice;
            const maxPrice = req.query.maxPrice;
            const catagory = req.query.catagory;
            const result = await this.productRepository.filter(minPrice,maxPrice,catagory);
            res.status(200).send(result);
        }catch(err){
            console.log(err);
            throw new appError(500,"Somethings want wrong........");
        }    
    }
    async rateProducts(req,res){
        try{
            const {productID, rating} = req.query
            const userID = req.userID;
            const result = await this.productRepository.ratings(userID, productID, rating)
            if(result.acknowledged){
                res.status(200).send("Your rating is add");
            }else{
                res.status(400).send("Your rate is not added");
            }
        }catch(err){
            console.log(err);
            throw new appError(500,"Somethings want wrong........");
        }  
    };  
}