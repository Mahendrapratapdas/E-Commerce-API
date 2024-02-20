import { getDB } from "../../config/mongoDB.js";
import appError from "../../middle-ware/error.middleware.js";
export default class userModel{
    constructor(name, email, password, type){
        this.name = name;
        this.email = email;
        this.password = password;
        this.type = type;
    }
    static async addUser(name, email, password, type){
        try{
            const newUser = new userModel(name,email,password,type);
            const db = getDB();
            const collection = db.collection("users");
            const result = await collection.insertOne(newUser);
            return newUser;
        }catch(err){
            throw new appError(400,"YOu data is not stored...........");
        }
    }
    static userDetails(email, password){
        const user = users.find(u => u.email == email && u.password == password);
        return user;
    }
    static getAllUser(){
        return users;
    }
}

let users = [
    {
        name:'Mahendra',
        email:'mahi@gmail.com',
        password:'abc',
        type:'seller',
        id:1,
    },
    
];