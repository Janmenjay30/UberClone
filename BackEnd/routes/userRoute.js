const express = require('express');
const router = express.Router();
const {body}=require('express-validator');
const userController=require('../controllers/userController');
const {authUser}=require('../middleware/auth');


router.post('/register',[
    body('email').isEmail().withMessage('Email is not valid'),
    body('fullName.firstName').isLength({min:3}).withMessage('First name should be atleast 3 characters long'),
    body('fullName.lastName').isLength({min:3}).withMessage('Last name should be atleast 3 characters long'),
    body('password').isLength({min:6}).withMessage("Password should be atleast 6 charachters long"),

],userController.registerUser);

router.post('/login',[
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').isLength({min:6}).withMessage("Password should be atleast 6 charachters long"),
],
userController.LoginUser
);

router.get('/profile',authUser,userController.getUserProfile);
router.get('/logout',authUser,userController.logoutUser);


module.exports = router;