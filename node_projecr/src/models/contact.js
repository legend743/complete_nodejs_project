const mongoose=require('mongoose')
const contact_data=mongoose.Schema({
    email:String,
    phone:String,
    querry:String
})
module.exports=mongoose.model('contact_us',contact_data)