const mongoose=require("mongoose");
const teacherSchema=new mongoose.Schema({
    id:Number,
    name:String,
    age:Number
})
module.exports=mongoose.model("Teacher",teacherSchema)
