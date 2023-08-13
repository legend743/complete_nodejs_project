const mongoose=require('mongoose')
const Slider=mongoose.Schema({
    ImageUrl:String,
    class:String
})
module.exports=mongoose.model('slider',Slider)
