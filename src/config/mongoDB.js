import {MongoClient} from "mongodb";

const url = "mongodb://localhost:27017/ecom";

const connectToMongoDB = async()=>{
    try{
        await MongoClient.connect(url);
        console.log("Connected to the MongoDB");
    }catch(err){
        console.log(err);
    }
}

export default connectToMongoDB;