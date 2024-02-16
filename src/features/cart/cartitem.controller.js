import cartModel from "./cartitem.model.js";
import userModel from "../user/user.model.js";
import productModel from "../product/product.model.js";

export default class cartController{
    add(req,res){
        const {productID,quantity} = req.query;
        const userID = req.userID;
        const product = productModel.getAll().findIndex(p=> p.id == productID)
        const user = userModel.getAllUser().findIndex(u=> u.id == userID);
        if(product >=0 ){
            if(user >= 0){
                const item = cartModel.add(productID, userID, quantity);
                res.status(201).send(item);
            }else{
                return res.status(400).send("User Not Found");
            }
        }else{
            return res.status(400).send("Product Not Found");
        }
    }
    get(req,res){
        const userID = req.userID;
        const user = userModel.getAllUser().findIndex(u=> u.id == userID);
        if(user >= 0){
            const result = cartModel.getItem(userID);
            if(!result){
                res.status(200).send("No cart Item");
            }else{
                res.status(200).send(result)
            }
        }else{
            res.status(400).send("User Not Found");
        }
    }
    delete(req, res){
        const userID = req.userID;
        const cartItemID = req.params.id
        const item = cartModel.getItem(userID).findIndex(i=> i.id == cartItemID)
        if(item >= 0){
            const err = cartModel.delete(cartItemID,userID);
            const item = cartModel.getItem(userID).find(i=> i.id == cartItemID)
            if(err){
                return res.status(400).send(err)
            }else{
                return res.status(200).send(item);
            }
        }else{
            return res.status(400).send("User does't have this item in the cart");
        }
    }
}