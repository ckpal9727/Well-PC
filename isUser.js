const jwt=require('jsonwebtoken');

function isUser(req,res,next)
{
    const token=req.cookies
    if(token.accessToken)
    {
        // console.log(token.accessToken)
        jwt.verify(token.accessToken,"secret",(err,User)=>
        {
            req.user=User;
        })
        
    }else{
        console.log("token nahi h")
    }
    next()
}
module.exports=isUser;