const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    Phone_No:Number,
    email:String,
    Name:String,
    password:String,
    city:String,
    role:String,
    verify:Boolean
})

const UserModel=mongoose.model("user",userSchema);

module.exports={UserModel}