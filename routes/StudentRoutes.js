const express=require('express');
const router=express.Router();
const student=require('./../models/Students')
//students schema

router.post('/',async(req,res)=>{
    try{
        const studentsData=req.body;
        const newStudents=new student(studentsData);
        const studentsResponse=await newStudents.save()
        res.status(200).json(studentsResponse);
    }
    catch(err){
        res.status(500).json({error:"Internal server error"});
    }
})
router.get('/', async(req,res)=>{
   try{
     const getStudent=await student.find();
     res.status(200).json(getStudent)
   }
   catch(err){
    res.status(500).json({error:"Internal server error"});
   }
})
module.exports=router;