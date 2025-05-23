const express=require('express');
const router=express.Router()
const Person=require('./../models/Person')
//person schema

router.post('/',async(req,res)=>{
    try{
        const data=req.body;
        const newPerson=new Person(data);
        const response=await newPerson.save()
        console.log("data saved");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"})
    }
})
router.get('/', async(req,res)=>{
    try{
        const getData=await Person.find();
        res.status(200).json(getData);
    }
    catch(err){
        res.status(500).json({error:"Internal server error"})
    }
})
router.get('/:work',async(req,res)=>{
    try{
        const work=req.params.work;
        if(work=="child" || work=="student"){
         const response=await Person.find({worktype:work})
         res.status(200).json(response);   
        }
        else{
            res.status(404).json({error:"invalid input"})
        }
    }
    catch(err){
         res.status(500).json({error:"Internal server error"});
    }
})
router.put('/:id',async(req,res)=>{
    try{
        const updateId=req.params.id;
        const updateBody=req.body;
        const response=await Person.findByIdAndUpdate(updateId,updateBody,{
            new:true,
            runValidators:true,
        })
        if(!response){
            return res.status(400).json({error:"invalid data"})
        }
        console.log("data Updated");
        res.status(200).json(response)
    }
    catch(err){
        res.status(500).json({error:"Internal server error"});
    }
})
router.delete('/:id',async(req,res)=>{
        try{
            const deleteId=req.params.id;
            const deleteBody=await Person.findByIdAndDelete(deleteId);
            if(!deleteBody){
                return res.status(400).json({error:"Invalid data"});
            }
            console.log("Successfully deleted");
            res.status(200).json({message:"successfully deleted"});
        }
        catch(err){
             res.status(500).json({error:"Internal server error"});
             console.log("error find",err)
        }
})
//exports router add
module.exports=router;