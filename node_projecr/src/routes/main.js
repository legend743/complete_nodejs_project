const express=require("express");
const mongoose=require("mongoose")
const { render } = require("express/lib/application");
// const{route}=require('express/lib/application')
const contact_data=require('../models/contact')
const Details=require("../models/Details")
const Slider=require("../models/slider")
const Services=require("../models/services")
const routes=express.Router();
routes.get("/gallery",(req,res)=>{
//  res.render("gallery")

 
})
routes.post("/process-data-form",async(req,res)=>{
    console.log("form is submitted");
    console.log(req.body);
    // save this data to db
    try { const data= await contact_data.create(req.body)     
        console.log(data);   
        res.redirect('/index')
    } catch (error) {
        console.log(error);

        
    }


})
routes.get("/index",async(req,res)=>{
//  
const details=await Details.findOne({ "_id":'64d392bcc6012e66c307ad03'});
const slides=await Slider.find()
const service=await Services.find()
// console.log(details);
// console.log(slides);

// console.log(service);
res.render("index",{
    details:details,
    slides:slides,
    service:service
})
})

module.exports=routes;
