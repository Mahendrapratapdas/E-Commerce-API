import cartModel from "./cartitem.model.js";
import userModel from "../user/user.model.js";
import productModel from "../product/product.model.js";

export default class cartController{
    add(req,res){
        const {productID,quantity} = req.query;
        const userID = req.userID;
        console.log(userID);
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
            return res.status(400).send("User Not Found");
        }
    }
}