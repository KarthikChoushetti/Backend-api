const { json } = require('express');
const User_details=require('../models/userModel.js');
exports.home=(req,res)=>{
    res.send("<h1>Hey this is my api key</h1>");
};
exports.newUsers=async(req,res)=>{
    try {
        const {name,email,pin}=req.body
        if(!name||!email||!pin){
            throw new Error("Name email and pin is required")
        }
      const userexists=await User_details.findOne({email})
        if(userexists){
            throw new Error("User already exists in our database")
        }
        const user=await User_details.create({
            name,
            email,
            pin
        })
        res.status(201).json({
            sucess:true,
            message:"User datials are updated sucessfully",
            user
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            sucess:false,
            message:error.message
        })
    }
}
exports.userLogin=async(req,res)=>{
    try {
        const{name,email,pin}=req.body
        if(!name||!email||!pin){
            throw new Error("No account found in our database please signup to login")
        }
        const userexists=await User_details.find({name,email,pin})
        if(userexists==false){
            throw new Error("User doesnt exist in our database")
        }
        res.status(200).json({
            sucess:true,
            message:"User loged in sucessfully"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            sucess:false,
            message:error.message
        })
    }
}
