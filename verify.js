const jwt=require('jsonwebtoken');


function verify(req,res,next)
{
    
    // console.log("I am in verify")
    const authToken=req.cookies
    if(authToken)
    {        
        jwt.verify(authToken.accessToken,"secret",(err,User)=>
        {
            // console.log()
            if(err) res.send("Token is invalid ");
            req.user=User;
            next();
        })
    }else{
        res.send("Token is not found");
    }
}

module.exports = verify;