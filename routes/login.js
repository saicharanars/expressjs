const express = require("express");
const fs = require("fs");
const router = express.Router();
router.get("/login", (req, res, next) => {
  res.send(
    `<form action="/username" onsubmit="localStorage.setItem('username',document.querySelector('input').value)" method="POST" ><label for="name">name</label><input type="text" id="name" name="name"><button type="submit">Submit</button></form>`
  );
});
router.post("/username", (req, res, next) => {
  res.redirect("/");
});
module.exports = router;
