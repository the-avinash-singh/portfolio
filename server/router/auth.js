const express=require("express");
const User=require("../models/User");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

const secret=process.env.JWTSECRET;

const router=express.Router();

router.get("/",(req,res)=>{
    res.send("home");
});

router.post('/signin',async(req,res)=>{
    const {name,email,phone,work,password}=req.body;
    if (!name||!email||!phone||!work||!password){
        return res.status(422).json({message:"plz fill all the fields"});
    }

    try{
    let user=await User.findOne({email:email});
    if(user){
        return res.status(409).json({message:"Email registered to another account"});
    } 
    const salt=await bcrypt.genSalt(10);
    const secpass=await bcrypt.hash(password,salt);
        user=new User({name,email,password:secpass,phone,work});
        user=await user.save();
        const payload={
            user:{
                id:user.id
            }
        };
        const token=jwt.sign(payload,secret);
        res.status(201).json({message:"user registered",user,token});
    }catch(err){
        res.status(500).json({error:"server error"});
        console.log(err)
    }
})

router.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    if(!email||!password){
        return res.status(422).json({messsge:"plz fill all fields"});
    }
    try{
        let user=await User.findOne({email});
        if(!user){
            return res.status(403).json({message:"Invalid email or password"});
        }
        const compareResult=await bcrypt.compare(password,user.password);
        if(!compareResult){
            return res.status(409).json({message:"invalid email or password"});
        }
        const payload={
            user:{
                id:user.id
            }
        }
        const token=jwt.sign(payload,secret)
        res.status(200).json({message:"logedin successfully",user,token});
    }catch(err){
        console.log(err);
        return res.status(500).json({error:"server error"})
    }
})
module.exports=router;
