const express=require("express")
const mongoose=require("mongoose")
const Student = require('./routers/studentRouter')
const Teacher=require('./routers/teacherRouter')

const cors=require("cors")
require("dotenv").config()
const app=express()
app.use(cors(),express.json())

mongoose.connect('mongodb://localhost:27017/Detailsdb')
.then(()=>console.log("db connected"))
.catch((err)=>console.log("error db connection",err))
//use routes

app.use('/student',Student);

app.use('/teacher',Teacher);


app.listen(process.env.PORT,()=>{
  console.log("port is connected",process.env.PORT) 
 })
