const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express=require('express');
const app=express();
app.use(cors());
const connectToDB = require('./db/db');
const userRoutes=require('./routes/userRoute');
app.use(express.json());



app.get('/',(req,res)=>{
    res.send("Hello World");
});
app.use('/user',userRoutes);

connectToDB();

module.exports=app;