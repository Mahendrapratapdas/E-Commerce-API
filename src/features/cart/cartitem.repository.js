import { ObjectId } from "mongodb";
import { getDB } from "../../config/mongoDB.js";
export default class CartItemsRepository{
    constructor(){
        this.collection = "cartItems";
    }
    async add(newCartItem){
        try{
            const db = getDB();
            const collection = db.collection(this.collection);
            await collection.insertOne(newCartItem);
        }catch(err){
            console.log(err);
            throw new appError(500,"Somethings want with Database........");
        }
    };
    async getItem(userID){
        try{
            const db = getDB();
            const collection = db.collection(this.collection);
            return await collection.find({userID:userID}).toArray();
        }catch(err){
            console.log(err);
            throw new appError(500,"Somethings want with Database........");
        }
    }
    async delete(userID, cartId){
        try{
            const db = getDB();
            const collection = db.collection(this.collection);
            const result = await collection.deleteOne({_id:new ObjectId(cartId), userID:new ObjectId(userID)})
            return result.deletedCount>0;
        }catch(err){
            console.log(err);
            throw new appError(500,"Somethings want with Database........");
        }
    }

}