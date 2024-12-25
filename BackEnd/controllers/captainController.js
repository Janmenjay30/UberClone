const blacklistToken = require('../models/blacklistToken');
const captainModel = require('../models/captain');
//
const captainService = require('../services/captainService');
const validationResult = require('express-validator').validationResult;


module.exports.registerCaptain = async (req, res) => {
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    
    const {fullName,email,password,vehicle}=req.body;
    const isCaptainAlreadyExist=await captainModel.findOne({email});

    if(isCaptainAlreadyExist){
        return res.status(400).json({message:"Captain already exist"});
    }

    const hashPassword=await captainModel.hashPassword(password);
   

    const captain=await captainService.createCaptain({
        fullName:{
            firstName:fullName.firstName,
            lastName:fullName.lastName,
        },
        email:email,
        password:hashPassword,
        vehicle:{
            color:vehicle.color,
            plate:vehicle.plate,
            capacity:vehicle.capacity,
            vehicleType:vehicle.vehicleType
        }
        

    });
    

    const token=captain.generateAuthToken();
    res.status(201).json({captain,token});
    

}

module.exports.LoginCaptain=async (req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {email,password}=req.body;
    const isCaptainExist=await captainModel.findOne({email}).select('+password');;
    if(!isCaptainExist){
        return res.status(401).json({message:"Invalid email or password"});
    }

    const isPasswordCorrect=await isCaptainExist.comparePassword(password);
    if(!isPasswordCorrect){
        return res.status(401).json({message:"Invalid email or password"});
    }
    const token=isCaptainExist.generateAuthToken();

    res.cookie('token',token);
    res.status(200).json({captain:isCaptainExist,token});
}

module.exports.getCaptainProfile=async(req,res,next)=>{
    try{
        const captain=await captainModel.findById(req.captain._id);
        res.status(200).json(captain);

    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
}

module.exports.logoutCaptain=async(req,res,next)=>{
    try {
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
        
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }

        
        await blacklistToken.create({ token });
        
        // Clear cookie
        res.clearCookie('token');
        
        return res.status(200).json({ message: "Captain logged out successfully" });
    } catch (error) {
        console.error("Logout error:", error);
        return res.status(500).json({ message: "Error during logout", error: error.message });
    }

}

