//import exprees using ES6 syntax
import express from "express";
import cors from 'cors';
import productRouters from './src/features/product/product.routes.js';
import UserRouters from "./src/features/user/user.routes.js";
import {cartRoutes} from "./src/features/cart/cartitem.routes.js";
import basicAuth from "./src/middle-ware/basicAuth.middleware.js";
import jwtAuth from "./src/middle-ware/jwtAuth.middleware.js";
import {errorMiddleware} from "./src/middle-ware/error.middleware.js"
import {connectToMongoDB} from "./src/config/mongoDB.js";
//crete a express server
const app = express();

//use the cors module to give the user access
const corsOptions = {
    origin:"*",
    allowHeaders:"*"
}
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/product",jwtAuth, productRouters);
app.use("/api/user", UserRouters)
app.use("/api/cart",jwtAuth,cartRoutes)
//set default route
app.get('/', (req, res)=>{
    res.send("Welcome to the Ecommerce APIs");
})
//Handeling the bed request.
app.use((req,res)=>{
    res.status(400).send("Api Url not found");
})

//Handel the error class.
app.use(errorMiddleware);
//server listen
app.listen(3002,()=>{
    console.log("Server listen at 3002");
    connectToMongoDB();
})

