
import productModel from "../product/product.model.js";
export default class cartModel{
    constructor(productID, userID, quantity){
        this.productID = productID;
        this.userID = userID;
        this.quantity = quantity;
    }
};