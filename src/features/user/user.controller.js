import jwt from "jsonwebtoken";
import appError from "../../middle-ware/error.middleware.js"
import UserRepo from "./user.repository.js";
import userModel from "./user.model.js";
import bcrypt from "bcrypt";

export default class userController{
    constructor(){
        this.userRepo = new UserRepo();
    }
    async signUp(req,res){
        const {name, email, password, type} = req.body;
        const hashedPassword = await bcrypt.hash(password,12);
        const user = new userModel(name, email, hashedPassword, type);
        const result = await this.userRepo.addUser(user)
        if(result.acknowledged){
            res.status(200).send(user);
        }else{
            res.status(400).send("Something wants wrong in signUp");
        }
        
    };

    async signIn(req, res){
        const email = req.body.email;
        const password = req.body.password;
        const user = await this.userRepo.getUserByEmail(email);

        if(!user){
            return res.status(401).send('Unauthorized access');
        }
        
        const hashedPassword = await bcrypt.compare(password, user.password);
    
        if(hashedPassword){
            const token = jwt.sign({userId:user.id},"AaPJbqiBjLIVtXmiOO14Jl3wjLylzfGy",{expiresIn:'1hr'});
            res.status(200)
            .cookie("jwtToken",token,{maxAge:900000,httpOnly:false})
            .send(token);
        }else{
            return res.status(401).send('Unauthorized access');
        }
    }

}