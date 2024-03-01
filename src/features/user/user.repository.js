import mongoose from "mongoose";
import { userSchema } from "./user.schema.js";
import appError from "../../middle-ware/error.middleware.js";


const userModel = mongoose.model('user', userSchema);

export default class UserRepository{
    async addUser(newUser){
        try{
            const user = new userModel(newUser);
            await user.save()
            return {
                status:true,
                res:user
            };
        }catch(err){
            return{
                status:false,
                error:{
                    statusCode:400,
                    msg:err.message
                }
            }
        }
    }
    async getUserByEmail(userEmail){
        try{
            const user = await userModel.findOne({email:userEmail});
            if(user){
                return{
                    status:true,
                    res:user
                }
            }else{
                return{
                    status:false,
                    error:{
                        statusCode:400,
                        msg:"User Not Found"
                    }
                }
            }
        }catch(err){
            return{
                status:false,
                error:{
                    statusCode:400,
                    msg:err.message
                }
            }
        }
    }
    async resetPassword(userID, hashedPassword){
        try{
            const user = await userModel.findById(userID);
            if(user){
                user.password = hashedPassword;
                await user.save();
                return{
                    status:true,
                    res:user
                }
            }else{
                return{
                    status:false,
                    error:{
                        statusCode:400,
                        msg:"User Not found"
                    }
                }
            }
        }catch(err){
            return{
                status:false,
                error:{
                    statusCode:400,
                    msg:err.message
                }
            }
        }
        
    }
}