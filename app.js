const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST" ><label for="name">name</label><input type="text" id="name" name="name"><label for="size"> size</label><input type="text" id="size" name="size"><button type="submit">Submit</button></form>');
    
});
app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});
app.use('/',(req,res,next)=>{
    console.log("in middleware");
    next();//allow request to continue next request
});
app.listen(4000);
