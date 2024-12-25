const captainModel = require('../models/captain');


module.exports.createCaptain = async (data) => {
    const { 
        fullName: { firstName, lastName },
        email,
        password,
        vehicle: { color, plate, capacity, vehicleType }
    } = data;
        console.log("firstName",firstName,"lastName",lastName,"email",email,"password",password,"color",color,"plate",plate,"capacity",capacity,"vehicleType",vehicleType);
    if(!firstName || !email || !password || !color || !plate || !capacity || !vehicleType){
        throw new Error("Please provide all the details");  
    }
    const captain=captainModel.create({
        fullName:{
            firstName,
            lastName
        },
        email,password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        }
    })
    return captain;
}
