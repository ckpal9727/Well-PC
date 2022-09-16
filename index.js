const express=require('express');
const app=express();
const port=process.env.PORT || 3000;
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');

const connection=require('./connection/connection');
const apiRoute=require('./apiRoute/apiRoute');
const pageRender=require('./PageRender/pageRender');





app.set('view engine','ejs');

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(pageRender);
app.use('/api/user/',apiRoute);

app.use(express.static('public'));



app.listen(port,()=>
{
    console.log(`Server is running on ${port}`);
})