const mongoose=require('mongoose');

// const url='mongodb+srv://ck:12@cluster0.pgzxkkq.mongodb.net/User?retryWrites=true&w=majority';
const url='mongodb://localhost:27017/test'
const paramsUrl={
    useNewUrlParser:true,
    useUnifiedTopology:true,
}

async function mongoDb ()
{
    try {
       const connection=await mongoose.connect(url,paramsUrl);
       if(connection)
       {
        console.log("connection successfull");
       }
    } catch (error) {
        console.log(error)
    }
}
mongoDb();