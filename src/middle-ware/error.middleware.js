import sendMail from './mailto.middleware.js';

export default class appError extends Error{
    constructor(statusCode, message){
        super(message);
        this.statusCode = statusCode;
    }
};
export const errorMiddleware = ((err,req,res,next)=>{
    if(err instanceof appError){
        return res.status(400).send(err.message);
    }
    sendMail(err.stack)
    return res.status(500).send('Oops......Something wants wrong');
});
