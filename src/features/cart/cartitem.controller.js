import { ObjectId } from "mongodb";
import cartModel from "./cartitem.model.js";
import CartItemsRepository from "./cartitem.repository.js";
import appError from "../../middle-ware/error.middleware.js";

export default class cartController{
    constructor(){
        this.repository = new CartItemsRepository();
    }
    async add(req,res){
        try{
            const {quantity} = req.body;
            const{productID} = req.body;
            const userID = req.userID;

            const newCartItem = new cartModel(new ObjectId(productID), new ObjectId(userID), parseInt(quantity))
            await this.repository.add(newCartItem)
            res.status(201).send(newCartItem);
        }catch(err){
            console.log(err);
            throw new appError(500,"Somethings want wrong........");
        }
    }
    async get(req,res){
        try{
            const userID = req.userID;
            const result = await this.repository.getItem(new ObjectId(userID));
            res.status(200).send(result);
        }catch(err){
            console.log(err);
            throw new appError(500,"Somethings want wrong........");
        }
    }
    async delete(req, res){
        try{
            const userID = req.userID;
            const cartItemID = req.params.id
            const result = await this.repository.delete(userID,cartItemID);
            if(!result){
                res.status(400).send("Item not found");
            }else{
                res.status(200).send("Successfully deleted");
            }
        }catch(err){
            console.log(err);
            throw new appError(500,"Somethings want wrong........");
        } 
    }
}