const http = require('http');
const express = require('express');
const app = express();
app.use((req,res,next)=>{
    console.log("in middleware");
    next();//allow request to continue next request
});
app.use((req,res,next)=>{
    console.log("in next middleware");
    res.send('<h1>hello from express</h1>');
});
app.listen(4000);