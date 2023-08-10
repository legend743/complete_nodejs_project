const express=require("express")
const app=express();

const hbs=require("hbs")

const route=require('./src/routes/main');
const mongoose = require('mongoose');
const Details=require("../node_projecr/src/models/Details")

app.use('/user',route)
app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")

//_______________________________database connection_______________________________________________________________

// mongoose.connect("mongodb://localhost:27017/website",()=>{
//     console.log("database connected");
// })
mongoose.connect('mongodb://127.0.0.1:27017/website', {
  useNewUrlParser: true,
  useUnifiedTopology: true
  
})
.then(() => {
  console.log('Connected to MongoDB');
//   ---------------details saving to the database  which in future can be fetch for making dynamic changes---------------
//   Details.create({

//     brandName:"Infotech",
//     brandIcon:"",
//     links:[{
//         label:"Home",
//         url:"/home"
//     },
//     {
//         label:"Contact us",
//         url:"/contact"
//     },
//     {
//         label:"about us",
//         url:"/about"
//     }
// ]
//   })
// -----------------------ended---------------------------
 
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
// ___________________________--database connection ended--_____________________________________________________

app.listen(5006,()=>{
    console.log("server is listening at port: 5006");
})