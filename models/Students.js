const mongoose=require('mongoose');
const studentScehma=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    roll:{
        type:Number,
        required:true
    },
    worktype:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    subject:{
        type:String,
        required:true
    }
})
const Student=mongoose.model('student',studentScehma);
module.exports=Student;