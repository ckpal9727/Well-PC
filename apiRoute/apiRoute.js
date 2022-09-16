const Router=require('express').Router();
const User=require('../model/User');
const Computer=require('../model/Computer');
const crypto=require('crypto-js');
const jwt=require('jsonwebtoken');




Router.post('/register',async(req,res)=>
{
    console.log("I am in register");
    const {name,email,password,isLabAssistant,department,sem,div}=req.body;
    const encPassword=crypto.AES.encrypt(password,"secret").toString();
    const user=new User({name:name,email:email,password:encPassword,isLabAssistant:isLabAssistant,department,sem,div}) ;
    try {
    const registerUser=await user.save();
     res.redirect('/login');
    } catch (error) {
     console.log(error);
     
    }
})

Router.post('/login',async(req,res)=>
{
    console.log("I mam in lofgin")
    const {email,password}=req.body
    const existUser=await User.findOne({email:email});
    if(!existUser){
        res.send("Jane Vastal");
    }else{
        const originalPassword=crypto.AES.decrypt(existUser.password,"secret").toString(crypto.enc.Utf8);
        console.log(originalPassword);
        if(password===originalPassword){
           const accesToken=jwt.sign({id:existUser._id,email:existUser.email,department:existUser.department},"secret",{expiresIn:"5d"})
           res.json({accesToken})
        }else{
            res.send("Password is wrong")
        }
    }
})

module.exports=Router;

