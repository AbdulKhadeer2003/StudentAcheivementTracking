import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
const app=express()
const port= process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: false }))

await mongoose.connect("mongodb://localhost:27017/Students");
app.get('/login',(req,res)=>{
    
})

app.listen(port,(req,res)=>{
    console.log(`server listening at port:${port}`);
})
