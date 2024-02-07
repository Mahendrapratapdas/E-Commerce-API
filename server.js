//import exprees using ES6 syntax
import express from "express";
import productRouters from './src/features/product/product.routes.js'
//crete a express server
const app = express();

app.use("/api/product", productRouters);
//set default route
app.get('/', (req, res)=>{
    res.send("Welcome to the Ecommerce APIs");
})

//server listen
app.listen(3002,()=>{
    console.log("Server listen at 3002");
})

