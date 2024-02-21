import express from "express";
import userController from "./user.controller.js";

const UserController = new userController();
//configure the user routes
const UserRouters = express.Router();

UserRouters.post('/signUp',(req,res)=>{
    UserController.signUp(req,res);
});

UserRouters.post('/signIn',(req,res)=>{
    UserController.signIn(req,res);
});


export default UserRouters;