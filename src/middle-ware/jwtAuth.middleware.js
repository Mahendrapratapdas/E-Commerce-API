import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next)=>{
    const token = req.headers['authorization'];
    try{
        const payload = jwt.verify(token,"AaPJbqiBjLIVtXmiOO14Jl3wjLylzfGy");
        req.userID = payload.userID;
        next();
    }catch(err){
        return res.status(401).send("Un Authorized access")
    }

}
export default jwtAuth;