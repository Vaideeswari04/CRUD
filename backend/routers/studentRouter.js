const express=require("express");
const router=express.Router();
const Student=require('../models/studentSchema');

router.get('/',async(req,res)=>{
    const students=await Student.find();
    res.json(students);
})
router.post('/',async(req,res)=>{
  const stddet=new Student(req.body);
  await stddet.save();
  res.status(200).json(stddet)
})
router.get('/:id',async(req,res)=>{
    const stdupda=await Student.findById(req.params.id);
   res.send(stdupda)
})
router.put('/:id',async(req,res)=>{
  const stdupd=await Student.findByIdAndUpdate(req.params.id,req.body)
  res.send({message:"updated"})
})
router.delete('/:id',async(req,res)=>{
  const del=await Student.findByIdAndDelete(req.params.id)
})

module.exports=router;