const userModel=require('../models/user');
const userService=require('../services/userService');
const {validationResult}=require('express-validator');

module.exports.registerUser=async (req,res,next)=>{
    try{
        const errors=validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
        
        const {fullName,email,password}=req.body;
        const {firstName,lastName}=fullName;
        const hashPassword=await userModel.hashPassword(password); 

        const user=await userService.createUser({
            firstName,
            lastName,email,password:hashPassword
        });
        const token=user.generateAuthToken(); 

        res.status(201).json({user,token});

    }
    catch(error){
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports.LoginUser=async (req,res,next)=>{
    const error=validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({errors:error.array()});
    }

    const {email,password}=req.body;
    // console.log("Email is",email);
    const user=await userModel.findOne({email}).select('+password');
    // console.log("user is",user);
    if(!user){
        return res.status(401).json({message:"Invalid email or password"});

    }
    const isMatch=await user.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({message:"Invalid email or password"}); 
    }

    const token=user.generateAuthToken();
    res.status(200).json({user,token});
    
    
}
