import express from "express";
import cartController from "./cartitem.controller.js";

export const cartRoutes = express.Router();
const CartController = new cartController;
cartRoutes.post('/',(req, res)=>{
    CartController.add(req, res)
});
cartRoutes.get('/',(req, res)=>{
    CartController.get(req, res)
});
cartRoutes.delete('/:id', (req, res)=>{
    CartController.delete(req, res)
});