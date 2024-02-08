export default class productModel{
    constructor(id,name,desc,imageUrl,size,price,catagory){
        this.id = id;
        this.name=name;
        this.desc=desc;
        this.imageUrl=imageUrl;
        this.size=size;
        this.price=price;
        this.catagory=catagory
    }
    static getAll(){
        return products;
    }
    static add(product){
        product.id = products.length+1;
        products.push(product);
        return product;
    }
    static get(id){
        const product = products.find(i=>{
            return i.id==id;
        });
        return product;
    }
    static filter(minPrice,maxPrice,catagory){
        const product = products.filter((product)=>{
            return(
                (!minPrice||product.price>=minPrice) &&
                (!maxPrice || product.price <= maxPrice)&&
                (!catagory || product.catagory == catagory)
            );
        });
        return product;
    };
}

var products = [
    new productModel(1, 'T-shirt', 'Printed shirt','http://iphone.com',['l','xl','m'],118,"Mens'Ware"),
    new productModel(2, 'Shirt', 'Dot-shirt','http://shirt.com',['l','xl','m'],200,"Mens'Ware")
];