import express from "express";
import userController from "./user.controller.js";

const UserController = new userController;
//configure the user routes
const UserRouters = express.Router();

UserRouters.post('/signUp',UserController.signUp);
UserRouters.post('/signIn',UserController.signIn);



export default UserRouters;