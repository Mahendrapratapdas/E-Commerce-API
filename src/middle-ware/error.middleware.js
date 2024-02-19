import sendMail from './mailto.middleware.js';
export const errorMiddleware = ((err,req,res,next)=>{
    if(err instanceof appError){
        return res.status(400).send(err.message);
    }
    console.log("inside the error middle ware")
    sendMail(err.stack)
    return res.status(500).send('Oops......Something wants wrong');
    });
export default class appError extends Error{
    constructor(statusCode, message){
        this.statusCode = statusCode;
        super(message);
    }
};