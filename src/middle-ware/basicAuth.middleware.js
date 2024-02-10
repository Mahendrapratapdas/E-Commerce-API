import userModel from "../features/user/user.model.js"
const basicAuth = (req,res,next)=>{
    const authHeader = req.headers['authorization'];
    if(!authHeader){
        res.status(401).send("No authorization header is available");
    }
    const base64_Auth = authHeader.replace("Basic","");
    const decode_Auth = Buffer.from(base64_Auth,"base64").toString();
    const cred = decode_Auth.split(":");
    const user = userModel.getAllUser().find(u=>u.email == cred[0] && u.password  == cred[1]);
    if(user){
        next();
    }
    else{
        res.status(401).send("Unauthorised access");
    }
}

export default basicAuth;