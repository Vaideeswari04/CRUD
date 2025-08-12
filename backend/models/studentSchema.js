const mongoose=require("mongoose");
const studentSchema=new mongoose.Schema({
    id:Number,
    name:String,
    age:Number
})
module.exports=mongoose.model("Student",studentSchema)


