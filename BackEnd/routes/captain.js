const express=require('express');
const router=express.Router();
const {body}=require('express-validator');
const captainController=require('../controllers/captainController');
const {authCaptain}=require('../middleware/auth');


router.post('/register',[
    body('email').isEmail().withMessage('Email is not valid'),
    body('fullName.firstName').isLength({min:3}).withMessage('First name should be atleast 3 characters long'),
    body('vehicle.color').isLength({min:3}).withMessage('Color should be atleast 3 characters long'),
    body('vehicle.plate').isLength({min:3}).withMessage('Plate should be atleast 3 characters long'),
    body('vehicle.capacity').isNumeric().withMessage('Capacity should be a number'),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Vehicle type should be car, motorcycle or auto'),
],
captainController.registerCaptain
);

router.post('/login',[
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').isLength({min:6}).withMessage("Password should be atleast 6 charachters long"),
],captainController.LoginCaptain);

router.get('/profile',authCaptain,captainController.getCaptainProfile);
router.get('/logout',authCaptain,captainController.logoutCaptain);


module.exports=router;