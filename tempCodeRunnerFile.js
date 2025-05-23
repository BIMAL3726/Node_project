const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello Bimal how are you')
})
app.get('/hii', (req,res)=>{
    res.send("where u from")
})
app.get('/he', (req,res)=>{
    res.send("hello bimal")
})

app.listen(3001)