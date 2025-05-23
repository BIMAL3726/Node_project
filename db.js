const mongoose=require('mongoose');
const mongoURL="mongodb://localhost:27017/hotelDBS"
mongoose.connect(mongoURL)
const db=mongoose.connection;
db.on("connected",()=>{
    console.log("dbs connected");
})
db.on("error",(err)=>{
    console.log("database error",err);
})
db.on("disconnected",()=>{
    console.log("database disconnected");
})
module.exports=db;