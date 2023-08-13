const express=require("express")
const app=express();

const hbs=require("hbs")

const route=require('./src/routes/main');
const mongoose = require('mongoose');
const Details=require("../node_projecr/src/models/Details")
const slider=require("../node_projecr/src/models/slider");
const Services = require("../node_projecr/src/models/services");
const bodyParser=require('body-parser')
//static/css/style.css
app.use(bodyParser.urlencoded({
  extended:true
}))
app.use('/static',express.static("public"))
app.use('/',route)
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
// slider.create({
//   ImageUrl:"String"
// },
// {
//   ImageUrl:"String"

// },
// {
//   ImageUrl:"String"

// }

// )
//  ---------------slider image url ended-----------------

// Services.create([
//   {
//   IconUrl:"fas fa-user-graduate",
//   title:" Personalized Courses",
// subTitle:"Education is the key that unlocks the golden door to freedom"
// },
//   {
//   IconUrl2:"fab fa-accusoft",
//   title2:"Give better approaches",
// subTitle2:"Give a man a fish and you feed him for a day; teach a man to fish"
// },
//   {
//   IconUrl3:"fas fa-window-restore",
//   title3:"Experts Choice",
// subTitle3:"Education’s purpose is to replace an empty mind with an open one"
// },
//   {
//   IconUrl4:"fas fa-truck-monster",
//   title4:"Technical support",
// subTitle4:"Education is what remains after one has forgotten what one has learned in school"
// },
//   {
//   IconUrl5:"fas fa-tv",
//   title5:"Highly recommended",
// subTitle5:"Education is not preparation for life; education is life itself"
// },
//   {
//   IconUrl6:"fas fa-upload",
//   title6:"Get together",
// subTitle6:"The aim of education is the knowledge, not of facts, but of values"
// }
// ])
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
// ___________________________--database connection ended--_____________________________________________________

app.listen(5006,()=>{
    console.log("server is listening at port: 5006");
})