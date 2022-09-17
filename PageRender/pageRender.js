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

        if(isLabAssitant==='false')
        {
            res.render('register');
        }else{
            res.render('labAssitantRegister');
        }
    }
})
Router.get('/login',(req,res)=>
{
    res.render('login')
})



module.exports=Router;