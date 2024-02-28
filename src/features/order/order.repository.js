import { ObjectId } from "mongodb";
import { getDB } from "../../config/mongoDB.js";

export default class OrderRepository{
    constructor(){
        this.collection = "order";
    }
    async placeOrder(userID){
        // 1.Get the cart items and calculate the total

        // 2.Create an order record

        // 3.Reduce the product stock

        // 4.Clear the CartItems
    }
    async getTotalAmont(userID){
        const db = getDB();
        const items = db.collection("cartItems").aggregate([
            {
                $match:{userID:new ObjectId(userID)}
            },
            {
                $lookup:{
                    from:"products",
                    localField:"productID",
                    foreignField:"_id",
                    as:"productInfo"
                }
            },
            {
                $unwind:"$productInfo"
            },
            {
                $addField:{
                    "totalAmount":{
                        $multiply:["$productInfo.price","quantity"]
                    }
                }
            }
        ]).toArray();
        items.reduce((acc, item) => acc + item.totalAmount, 0);
    }
}