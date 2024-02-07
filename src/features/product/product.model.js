export default class productModel{
    constructor(id,name,desc,imageUrl,size){
        this.id = id;
        this.name=name;
        this.desc=desc;
        this.imageUrl=imageUrl;
        this.size=size;
    }
    static getAll(){
        return products;
    }
    static add(product){
        product.id = products.length+1;
        products.push(product);
        return product;
    }
}

var products = [
    new productModel(1, 'T-shirt', 'Printed shirt','http://iphone.com',['l','xl','m'])
]