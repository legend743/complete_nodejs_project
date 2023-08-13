const mongoose=require('mongoose');
const Details=mongoose.Schema({
    brandName:String,
    brandIcon:String,
    links:[{
        label:String,
        url:String,
    },
    {
label:String,
url:String
},
{
label:String,
url:String

},
],
}); 
module.exports=mongoose.model("'detail",Details)