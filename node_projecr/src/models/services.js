const mongoose=require("mongoose")
const Services=mongoose.Schema([{
    IconUrl:String,
    title:String,
    subTitle:String}

,
{
    IconUrl2:String,
    title2:String,
    SubTitle2:String
},
{
IconUrl3:String,
title3:String,
subTitle3:String
},
{
IconUrl4:String,
title4:String,
subTitle4:String
},
{
IconUrl5:String,
title5:String,
subTitle5:String
},
{
IconUrl6:String,
title6:String,
subTitle6:String
}]
)

module.exports=mongoose.model('services',Services)