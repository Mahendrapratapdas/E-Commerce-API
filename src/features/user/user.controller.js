import jwt from "jsonwebtoken";
import appError from "../../middle-ware/error.middleware.js"
import bcrypt from "bcrypt";
import UserRepository from "./user.repository.js";


export default class userController{
    constructor(){
        this.userRepo = new UserRepository();
    }
    async signUp(req,res,next){
        const {name, email, password, type} = req.body;
        const hashedPassword = await bcrypt.hash(password,12);
        const user = {name, email, password:hashedPassword, type};
        const result = await this.userRepo.addUser(user)
        if(result.status){
            res.status(200).send(user);
        }else{
            next(new appError(result.error.statusCode,result.error.msg))
        }
        
    };

    async signIn(req, res, next){
        const email = req.body.email;
        const password = req.body.password;
        const user = await this.userRepo.getUserByEmail(email);

        if(!user.status){
            return res.status(401).send('Unauthorized access');
        }
        
        const hashedPassword = await bcrypt.compare(password, user.res.password);
    
        if(hashedPassword){
            const token = jwt.sign({userID:user.res._id},"AaPJbqiBjLIVtXmiOO14Jl3wjLylzfGy",{expiresIn:'1hr'});
            res.status(200)
            .cookie("jwtToken",token,{maxAge:900000,httpOnly:false})
            .send(token);
        }else{
            return res.status(401).send('Unauthorized access');
        }
    }
    
    async resetPassword(req,res,next){
        const { newPassword } = req.body;
        const userID = req.userID;
        const hashedPassword = await bcrypt.hash(newPassword,12);
        const result = await this.userRepo.resetPassword(userID, hashedPassword)
        if(result.status){
            res.status(201).send(result.res);
        }else{
            next(new appError(result.error.statusCode,result.error.msg))
        }
    }

}