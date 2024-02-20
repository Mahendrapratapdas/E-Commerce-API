import {MongoClient} from "mongodb";

const url = "mongodb://localhost:27017/ecom";

let dbInstance ;
export const connectToMongoDB = async()=>{
    try{
        dbInstance = await MongoClient.connect(url);
        console.log("Connected to the MongoDB");
    }catch(err){
        console.log(err);
    }
}

export const getDB =()=>{
    return dbInstance.db();
}