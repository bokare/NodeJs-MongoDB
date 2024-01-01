let mongoose = require("mongoose");

//  bun / dino / nodejs - runtime env for js
//  npm / yarn - package managers

mongoose.connect("")
  .then((result) => {
    console.log("Databse Connected !!");
    //   app.listen(port,()=>{
    //     console.log("Server is listening on port ",port);
    //   })
  })
  .catch((err) => {
    console.log("database connection Error :: ", err);
  });

// schema - structure of how the data/document will look like
const userSchema = mongoose.Schema({
    name: {
      type: String,
      required: [true, "Name is Mandatory"],
    },
    password: {
      type: String,
      required: [true, "Password is mandatory"],
      minLength: [8, "Minimum Length is 8"],
      maxLength: [12, "Maximum Should be 12"],
    },
    role: {
      type: String,
      enum: ["admin", "manager", "customer"],   // as role only this values are allowed 
    },
    age: {
      type: Number,
      min: [20, "Minimum is 20"],
      max: 100,
    },
  },
  { timestamps: true }
);

// model 
const userModel = mongoose.model("users",userSchema);

// inserting data 
let user = {
    name:"Thor",
    password:"bshfgshgd",
    role:"admin",
    age:78
}

userModel.create(user)   // create document in db
.then((data)=>{
    console.log(data);
    console.log("Data Inserted");
})
.catch((err)=>{
    console.log(err);
})

// fetching data 
userModel.find()
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})


userModel.find({name:"Saurabh"})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})


userModel.findOne({name:"Saurabh"})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})


userModel.find().sort({age:-1})   // sort by age in descending order  | 1 for asc order
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})

userModel.find().limit(2)
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})

userModel.deleteOne({age:27})
.then((info)=>{
    console.log(info);
})
.catch((err)=>{
    console.log(err);
})

userModel.deleteMany({name:"Saurabh"})
.then((info)=>{
    console.log(info);
})
.catch((err)=>{
    console.log(err);
})

userModel.updateOne({name:"Thor Odinson"},{age:100})
.then((info)=>{
    console.log(info);
})
.catch((err)=>{
    console.log(err);
})
