import express from "express";
import userController from "./user.controller.js";

const UserController = new userController;
//configure the user routes
const UserRouters = express.Router();

UserRouters.get('/signUp',UserController.signUp);
UserRouters.get('/signIn',UserController.signIn);



export default UserRouters;