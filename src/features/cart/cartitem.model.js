
export default class cartModel{
    constructor(productID, userID, quantity,id){
        this.productID = productID;
        this.userID = userID;
        this.quantity = quantity;
        this.id = id;
    }
    static add(productID,userID,quantity){
        const id = cartItems.length+1;
        const item = new cartModel(productID,userID,quantity,id)
        cartItems.push(item);
        return cartItems;
    };
};
var cartItems = [
    new cartModel(1,1,1,1)
]