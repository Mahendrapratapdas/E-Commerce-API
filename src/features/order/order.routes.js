import express  from "express";
import OrderController from "./order.controller.js";
export const orderRoutes = express.Router();
const orderController = new OrderController();

orderRoutes.post("/",(req,res,next)=>{
    orderController.placeOrder(req,res,next);
})