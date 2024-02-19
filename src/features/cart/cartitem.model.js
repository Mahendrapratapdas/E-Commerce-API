
import productModel from "../product/product.model.js";
export default class cartModel{
    constructor(productID, userID, quantity,id){
        this.productID = productID;
        this.userID = userID;
        this.quantity = quantity;
        this.id = id;
    }
    static add(productID,userID,quantity){
        const existingCartItem = cartItems.find(item => item.productID === productID && item.userID === userID);
        if (existingCartItem) {
            existingCartItem.quantity = quantity;
        } else {
            const id = cartItems.length + 1;
            const newItem = new cartModel(productID, userID, quantity, id);
            cartItems.push(newItem);
        }
        return cartItems;
    };
    static getItem(userID){
        const items = cartItems.filter(i=> i.userID == userID);
        return items;
    }
    static delete(cartId, userID){
        const item = cartItems.findIndex(i=> i.id == cartId && i.userID == userID);
        if(item < 0){
            throw new appError('Item not Found');
        }else{
            cartItems.splice(item,1)
            return cartItems
        }
    }
};
var cartItems = [
    new cartModel(1,1,1,1)
]