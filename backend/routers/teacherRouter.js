const express=require("express");
const router=express.Router();
const Teacher=require('../models/teacherSchema');

router.get('/',async(req,res)=>{
    const teachers=await Teacher.find();
    res.json(teachers);
})
router.post('/',async(req,res)=>{
  const teadet=new Teacher(req.body);
  await teadet.save();
  res.status(200).json(teadet)
})
router.get('/:id',async(req,res)=>{
    const teaupda=await Teacher.findByIdAndUpdate(req.params.id);
   res.send(teaupda)
})
router.put('/:id',async(req,res)=>{
  const teaupd=await Teacher.findByIdAndUpdate(req.params.id,req.body)
  res.send({message:"updated"})
})
router.delete('/:id',async(req,res)=>{
  const del=await Teacher.findByIdAndDelete(req.params.id)
})

module.exports=router;