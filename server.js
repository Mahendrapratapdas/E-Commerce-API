//import exprees using ES6 syntax
import express from "express";

//crete a express server
const app = express();

//set default route
app.get('/', (req, res)=>{
    res.send("Welcome to the Ecommerce APIs");
})

//server listen
app.listen(3002,()=>{
    console.log("Server listen at 3002");
})

