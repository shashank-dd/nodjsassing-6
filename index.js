const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const  cors =require("cors")


dotenv.config();
//connect to DB
mongoose.connect("mongodb+srv://shashi:shashi@12@cluster0.r8l6edo.mongodb.net/table?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
   
    console.log('connected to DB')
})


// Import routes
const blogRoute = require('./routes/blog');


//Router MIddlewares
// app.use(express.json());
app.use(cors({
    origin:"https://todolistaforcousins.onrender.com/blog"
}))
app.use('/', blogRoute);
app.get("*",(req,res)=>{
    res.status(404).send("Page not found")
})





app.listen(3000, () => console.log('Server running......'));
module.exports=app