import productModel from "./product.model.js";
export default class productController{
    getAllProducts(req,res){
        const product = productModel.getAll();
        res.status(200).send(product);
    }
    addProducts(req,res){
        const {name , desc , size} = req.body;
        const newProduct ={name, desc, imageUrl:req.file.filename, size:size.split(',')}
        const createdProduct = productModel.add(newProduct);
        res.status(201).send(createdProduct);
    }
    rateProducts(req,res){

    }
    getOneProducts(req,res){
        const id = req.params.id;
        const product = productModel.get(id); 
        if(!product){
            res.status(404).send('Product not found');
        }
        else{
            res.status(200).send(product);
        }
    }
    filterProduct(req,res){
        const minPrice = req.query.minPrice;
        const maxPrice = req.query.maxPrice;
        const catagory = req.query.catagory;
        const result = productModel.filter(minPrice,maxPrice,catagory);
        res.status(200).send(result);
    }
}