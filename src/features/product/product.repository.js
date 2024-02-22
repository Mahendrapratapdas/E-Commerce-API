import { ObjectId } from "mongodb";
import { getDB } from "../../config/mongoDB.js";

export default class ProductRepository{
    constructor(){
        this.collection = "products";
    }
    async add(product){
        try{
            const db = getDB();
            const collection = db.collection(this.collection);
            const newProduct = await collection.insertOne(product);
            return product;
        }catch(err){
            console.log(err);
            throw new appError(500,"Somethings want with Database........");
        }
        
    }
    async get(id){
        try{
            const db = getDB();
            const collection = db.collection(this.collection);
            const product = await collection.findOne({_id:new ObjectId(id)})
            return product
        }catch(err){
            console.log(err);
            throw new appError(500,"Somethings want with Database........");
        }
        
    }
    async getAll(){
        try{
            const db = getDB();
            const collection = db.collection(this.collection);
            const products = await collection.find().toArray();
            return products
        }catch(err){
            console.log(err);
            throw new appError(500,"Somethings want with Database........");
        }
    }
    async filter(minPrice,maxPrice,catagory){
        try{
            const db = getDB();
            const collection = db.collection(this.collection);
            let Expression = {};
            if(minPrice){
                Expression.price = {$gte:parseFloat(minPrice)}
            }
            if(maxPrice){
                Expression.price = {...Expression.price, $lte:parseFloat(maxPrice)}
            }
            if(catagory){
                Expression.price = {...Expression.price, $e:catagory}
            }
            const products = await collection.find(Expression).toArray();
            return products
        }catch(err){
            console.log(err);
            throw new appError(500,"Somethings want with Database........");
        }
    };
    async ratings(userID, productID, rating){
        try{
            const db = getDB();
            const collection = db.collection(this.collection);
            const result = await collection.updateOne({_id:new ObjectId(productID)},{$push:{ratings:{userID:new ObjectId(userID),rating:rating}}});
            return result;
        }catch(err){
            console.log(err);
            throw new appError(500,"Somethings want with Database........");
        }
    };
}