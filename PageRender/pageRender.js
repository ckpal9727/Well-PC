const Router=require('express').Router();
const User=require('../model/User');
const Computer=require('../model/Computer');
const crypto=require('crypto-js');
const jwt=require('jsonwebtoken');

Router.get('/',(req,res)=>
{
   res.render('home');
})
Router.get('/register',(req,res)=>
{
    const {isLabAssitant}=req.body
   
    if(!isLabAssitant)
    {
        res.redirect('/')
    }else{
        console.log(isToken)
        if(isLabAssitant==='false')
        {
            res.render('register',{isToken:isToken});
        }else{
            res.render('labAssitantRegister',{isToken:isToken});
        }
    }
})
Router.get('/login',(req,res)=>
{
    res.render('login')
})



module.exports=Router;