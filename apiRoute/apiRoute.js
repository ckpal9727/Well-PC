const Router=require('express').Router();
const User=require('../model/User');
const Computer=require('../model/Computer');
const crypto=require('crypto-js');
const jwt=require('jsonwebtoken');
const verify=require('../verify');
const cookieParser=require('cookie-parser');




Router.post('/user',(req,res)=>
{
    const {isLabAssitant}=req.body
   
    // console.log(isLabAssitant)
    setLabAssistant='setLabAssistant'
    res.cookie(setLabAssistant,isLabAssitant)
    if(isLabAssitant==='false')
    {
        res.render('register');

    }else{
        res.render('labAssitantRegister');
    }
})
Router.post('/register',async(req,res)=>
{
    console.log("I am in register");
    const isLabAssistant=req.cookies;
    const {name,email,password,department,sem,div}=req.body;
    dataOfBoolean=isLabAssistant.setLabAssistant;
    const encPassword=crypto.AES.encrypt(password,"secret").toString();
    const user=new User({name:name,email:email,password:encPassword,isLabAssistant:dataOfBoolean,department,sem,div}) ;
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
           const accesToken=jwt.sign({id:existUser._id,name:existUser.name,email:existUser.email,department:existUser.department,sem:existUser.sem,div:existUser.div,isLabAssistant:existUser.isLabAssistant},"secret",{expiresIn:"5d"})
           const token='accessToken';
           res.cookie(token,accesToken)
           res.redirect('profile')
        //    res.json({accesToken})
        }else{
            res.send("Password is wrong")
        }
    }
})

Router.get('/profile',verify,async(req,res)=>
{    
    const {name,email,department,sem,div,isLabAssistant}=req.user
    const data={name,email,department,sem,div,isLabAssistant}
    if(!isLabAssistant)
    {
        res.render('CRprofile',data)
    }else{
        res.render('labAssistantProfile',data)
    }


    
})

module.exports=Router;

