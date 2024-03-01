import express from "express";
import userController from "./user.controller.js";
import jwtAuth from "../../middle-ware/jwtAuth.middleware.js";

const UserController = new userController();
//configure the user routes
const UserRouters = express.Router();

UserRouters.post('/signUp',(req,res,next)=>{
    UserController.signUp(req,res,next);
});

UserRouters.post('/signIn',(req,res,next)=>{
    UserController.signIn(req,res,next);
});

UserRouters.post('/resetPassword',jwtAuth,(req,res,next)=>{
    UserController.resetPassword(req,res,next);
});

export default UserRouters;