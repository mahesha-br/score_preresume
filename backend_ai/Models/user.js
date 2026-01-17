const mongoose=require('mongoose');

const UserSchema= new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    role:{
        type:String,
        require:true  
    },
    photoUrl:{
        type:String,
    }
},{timestamps:true});

const userModel =mongoose.model("user",UserSchema);

module.exports=userModel