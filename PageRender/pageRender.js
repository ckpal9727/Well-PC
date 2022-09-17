const Router=require('express').Router();
const isUser=require('../isUser');


Router.get('/',isUser,(req,res)=>
{
    data=req.user
   res.render('home',{data:data});
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
            res.render('register',{isToken:isToken});
        }else{
            res.render('labAssitantRegister',{isToken:isToken});
        }
    }
})
Router.get('/login',isUser,(req,res)=>
{
  
    res.render('login')
})



module.exports=Router;