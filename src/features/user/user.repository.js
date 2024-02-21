import { getDB } from "../../config/mongoDB.js";
import appError from "../../middle-ware/error.middleware.js";

export default class UserRepo{
    
    async addUser(newUser){
        try{
            const db = getDB();
            const collection = db.collection("users");
            const result = await collection.insertOne(newUser);
            return result;
        }catch(err){
            throw new appError(400,"Your data is not stored in database...........");
        }
    }
    
    async getUserByEmail(email){
        const db = getDB();
        const collection = db.collection("users");
        const user = await collection.findOne({email:email})
        return user;
    }

}