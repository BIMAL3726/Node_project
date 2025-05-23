const express=require('express');
const app=express();
const db=require('./db');
const bodyParser=require('body-parser');
app.use(bodyParser.json());
const personRouter=require('./routes/personRoutes');
const studentRouter=require('./routes/StudentRoutes');
const childRouter=require('./routes/childRoutes')

app.use('/person',personRouter)
app.use('/student',studentRouter);
app.use('/child',childRouter);
app.get('/',function(req,res){
    res.send("Welcome to my hotel");
})
app.listen(3000,()=>{
    console.log("Listening port 3000 active");
})