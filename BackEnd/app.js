const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express=require('express');
const app=express();
app.use(cors());
const connectToDB = require('./db/db');
const userRoutes=require('./routes/userRoute');
app.use(express.json());
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const captainRoutes=require('./routes/captain');



app.get('/',(req,res)=>{
    res.send("Hello World");
});
app.use('/user',userRoutes);
app.use('/captain',captainRoutes);


connectToDB();

module.exports=app;