import {MongoClient} from "mongodb";

const url = "mongodb://localhost:27017/ecom";

let dbInstance ;
export const connectToMongoDB = async()=>{
    try{
        dbInstance = await MongoClient.connect(url);
        getCounter(dbInstance.db());
        createIndexes(dbInstance.db());
        console.log("Connected to the MongoDB");
    }catch(err){
        console.log(err);
    }
}

export const getDB =()=>{
    return dbInstance.db();
}

const getCounter = async (db) =>{
    const exitingCounter = await db.collection('counter').findOne({_id:'cartItemsId'});
    if(!exitingCounter){
        await db.collection('counter').insertOne({_id:'cartItemsId', value:0})
    }
}

const createIndexes = async (db) =>{
    await db.collection('products').createIndex({price:1});
    await db.collection('products').createIndex({name:-1, catagory:1});
    await db.collection('products').createIndex({desc:"text"});
}