const mongoose = require('mongoose');
const bcrypt=require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullName:{
        firstName:{
            type:String,
            required:true,
            minlength:[3,'First name should be atleast 3 characters long'],
        },
        lastName:{
            type:String,
            minlength:[3,'First name should be atleast 3 characters long'],
        },
    },
    email:{
        type:String,
        required:true,
        unique:true,    
        // validate:{
        //     validator:function(v){
        //         return /\S+@\S+\.\S+/.test(v);
        //     },
        //     message:props=>`${props.value} is not a valid email`
        // }
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    socketId:{
        type:String,
    },


});

userSchema.methods.generateAuthToken = function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'});

    return token;
}

userSchema.methods.comparePassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}

userSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10);
}

const userModel=mongoose.model('User',userSchema);

module.exports=userModel;