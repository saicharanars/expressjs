const express = require("express");
const fs = require("fs");
const router = express.Router();
router.get("/", (req, res, next) => {
  fs.readFile("./message.txt", (err, data) => {
    if (err) {
      data = "No Chat Exist";
    }
    res.send(`${data}<form action="/" onSubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST"><input type="text" name="message" id="message">
    <input type="hidden" name="username" id="username">
    <button type="submit">Send</button>
    </form>`);
  });
});
router.post("/",(req,res,next)=>{
    fs.appendFile("message.txt",`${req.body.username}:${req.body.message}  `,(err)=>{
        err==true?console.log(err):res.redirect("/")
    });
});
module.exports=router;