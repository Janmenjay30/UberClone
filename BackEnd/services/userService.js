const userModel = require('../models/user');

module.exports.createUser = async ({firstName,lastName,email,password}) => {
  ;
    if(!firstName || !email || !password){
        return res.status(400).json({message:"Please provide all the details"});
    }
    const user=await userModel.create({
        fullName:{
            firstName,
            lastName
        },
        email,
        password
    })
    return user;
}
