//import exprees using ES6 syntax
import express from "express";
import productRouters from './src/features/product/product.routes.js'
import UserRouters from "./src/features/user/user.routes.js";
import basicAuth from "./src/middle-ware/basicAuth.middleware.js"
import jwtAuth from "./src/middle-ware/jwtAuth.middleware.js"
//crete a express server
const app = express();

app.use(express.json());
app.use("/api/product",jwtAuth, productRouters);
app.use("/api/user", UserRouters)
//set default route
app.get('/', (req, res)=>{
    res.send("Welcome to the Ecommerce APIs");
})

//server listen
app.listen(3002,()=>{
    console.log("Server listen at 3002");
})

