import express from "express";
import cartController from "./cartitem.controller.js";

export const cartRoutes = express.Router();
const CartController = new cartController;
cartRoutes.post('/',CartController.add);