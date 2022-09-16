const jwt=require('jsonwebtoken');


function verify(req,res,next)
{
    
    const authToken=req.headers.token;
    if(authToken)
    {
        const token=authToken.split(" ")[1];
        jwt.verify(token,"secret",(err,User)=>
        {
            if(err) res.send("Token is invalid ");
            req.user=User;
            next();
        })
    }else{
        res.send("Token is not found");
    }
}

module.exports = verify;