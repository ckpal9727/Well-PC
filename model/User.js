const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:
    {
        type:String,
        required:true,
        unique:true
    },
    email:
    {
        type:String,
        required:true,
        unique:true
    },
    password:
    {
        type:String,
        required:true,
        
    },
    department:
    {
        type:String,
        require:true,
        default:"NA"
    },
    sem:{
        type:String,
        required:true,
        default:"NA"
    },
    div:
    {
        type:String,
        require:true,
        default:"NA"
    },
    isLabAssistant:{
        type:Boolean,
        default:false
    }
   
},{timestamps:true})

module.exports=mongoose.model('user',userSchema);