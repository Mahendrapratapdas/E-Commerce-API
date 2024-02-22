import userModel from "../user/user.model.js";
export default class productModel{
    constructor(name,desc,imageUrl,size,price,catagory){
        this.name=name;
        this.desc=desc;
        this.imageUrl=imageUrl;
        this.size=size;
        this.price=price;
        this.catagory=catagory
    }
};
