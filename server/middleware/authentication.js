const jwt=require("jsonwebtoken")

const jwt_secret = process.env.JWTSECRET;

const authentication=(req,res,next)=>{
    const token=req.header("auth-token");
    console.log(req)
    if(!token){
        res.status(401).send({message:"user unauthorised"})
    }
    try{
        const data=jwt.verify(token,jwt_secret);
        req.user=data.user;
        next();

    }catch(err){
        console.log(err);
        res.status(401).send({error:"invalid token"})
    }
}
module.exports=authentication;