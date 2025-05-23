const mongoose=require('mongoose')
const childSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
  
    fatherName:{
        type:String,
        required:true
    },
    motherName:{
        type:String,
        required:true
    },
    DOB:{
        type:String,
        required:true
    },
     worktype:{
        type:String,
        required:true
    },
})
const child=mongoose.model('child',childSchema);
module.exports=child;