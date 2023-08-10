const express=require("express");
const mongoose=require("mongoose")
const { render } = require("express/lib/application");
// const{route}=require('express/lib/application')
const Details=require("../models/Details")
const routes=express.Router();
routes.get("/gallery",(req,res)=>{
//  res.render("gallery")

 
})
routes.get("/index",async(req,res)=>{
//  
const details=await Details.findOne({ "_id":'64d392bcc6012e66c307ad03'});
console.log(details);
res.render("index",{
    details:details
})
})
module.exports=routes;
