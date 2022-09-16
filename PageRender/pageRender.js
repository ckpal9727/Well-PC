const Router=require('express').Router();
const User=require('../model/User');
const Computer=require('../model/Computer');
const crypto=require('crypto-js');
const jwt=require('jsonwebtoken');

Router.get('/home',(req,res)=>
{
    res.render('home');
})
Router.get('/register',(req,res)=>
{
    res.render('register');
})
Router.get('/login',(req,res)=>
{
    res.render('login')
})

module.exports=Router;