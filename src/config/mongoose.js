import mongoose from "mongoose";
const url = "mongodb://localhost:27017/ecom";

export const connectToMongoose = async()=>{
    try{
        await mongoose.connect(url,{
            //useNewUrlParser:true,
            //useUnifiedTopology:true
            });
        console.log("Connect with the DB using Mongoose")
    }catch(err){
        console.log(err);
    }
}
