import e from "express";
import userModel from "./user.model.js";

export default class userController{
    signUp(req,res){
        const {name, email, password, type} = req.body;
        const newUser = userModel.addUser(name, email, password, type);
        if(!newUser){
            res.status(400).send("User not created");
        }else{
            res.status(201).send(newUser);
        }
    };

    signIn(req, res){
        const email = req.body.email;
        const password = req.body.password;
        const result = userModel.userDetails(email, password);
        if(!result){
            res.status(400).send("User not found");
        }
        else{
            res.status(200).send(result);
        }
    }

}