const express = require('express');
const mongoose = require('mongoose');

const app = express();

// middleware to read request data in post and put and converet ot js object 
app.use(express.json());
// sample idea about internal working of this middleware
// express.json(req,res,next)
// {
//     let product="";
//     req.on("data",(chunk)=>{
//         product+=chunk;
//     })

//     req.on("end",()=>{
//        req.body = JSON.parse(product);
//        next()
//     })
// }


// database connection 

mongoose.connect("mongodb://localhost:27017/mongotuts")
.then(()=>{
    console.log("Database Connection Successfull")
})
.catch((err)=>{
    console.log(err)
})


const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is Mandatory"]
    },
    price:{
        type:Number,
        required:[true,"Price is Mandatory"],
        min:1
    },
    quantity:{
        type:Number,
        required:[true,"Quantity is Mandatory"],
    },
    category:{
        type:String,
        enum:["Clothing","Electronics","Household"]
    }
},{timestamps:true})


// model creation 

const productModel = mongoose.model("products",productSchema);










app.listen(8000,()=>{
    console.log("Server Up and running");
})