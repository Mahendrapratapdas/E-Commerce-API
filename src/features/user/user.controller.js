import e from "express";
import userModel from "./user.model.js";
import jwt from "jsonwebtoken";
import appError from "../../middle-ware/error.middleware.js"
export default class userController{
    async signUp(req,res){
        try{
            const {name, email, password, type} = req.body;
            const newUser = await userModel.addUser(name, email, password, type);
            res.status(200).send(newUser);
        }catch(err){
            throw new appError(400,"Something went wrong in the SignIn................");
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
            const token = jwt.sign({userId:result.id},"AaPJbqiBjLIVtXmiOO14Jl3wjLylzfGy",{expiresIn:'1hr'});
            console.log(token);
            res.status(200)
            .cookie("jwtToken",token,{maxAge:900000,httpOnly:false})
            .send(result);
        }
    }

}