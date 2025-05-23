const mongoose=require('mongoose');
const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    worktype: {
        type: String,
        required: true,
        lowercase: true
    }
})
const Person=mongoose.model('Person',personSchema);
module.exports=Person;