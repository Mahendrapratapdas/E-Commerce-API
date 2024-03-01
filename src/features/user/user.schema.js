import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    name:
    {
        type:String, 
        minlength:[3,"Name can't be less then 3 characters"], 
        required:[true,"Name Should not be empty"]
    },
    email:
    {
        type:String, 
        required:[true,"Email Should not be empty"], 
        unique:[true,"This email is already registered"]
    },
    password:
    {
        type:String,
        required:true
    },
    type:
    {
        type:String,
        enum:['seller','costumer',"Type should ne either seller or costumer"]
    }
})

