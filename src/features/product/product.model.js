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
}

var products = [
    new productModel(1, 'Mobile', 'Iphone','http://iphone.com','16x17')
]