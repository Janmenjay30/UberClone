const userModel=require('../models/user');
const bcrypt=require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports=async(req,res,next)=>{

    const token=req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message:"Unauthorized"});
    }
    const isBlackListed=await userModel.findOne({token:token});
    if(isBlackListed){
        res.status(401).json({message:"Unauthorized"});
    }
    try{
        
        const decode=jwt.verify(token,process.env.JWT_SECRET);
        const user=await userModel.findById(decode._id);
        req.user=user;
        return next();

    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }

}
