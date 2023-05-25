const path = require("path");
const rootDir = require("../util/path");
const express = require("express");
const router = express.Router();
router.get("/shop", (req, res, next) => {
  console.log("in middleware");
  console.log(path.join(rootDir,"../","views","shop.html"));
  res.sendFile(path.join(rootDir,"../","views","shop.html"));
  //next();
  //next();//allow request to continue next request
});
router.get("/contact", (req, res, next) => {
  console.log("in middleware");
  console.log(path.join(rootDir,"../","views","shop.html"));
  res.sendFile(path.join(rootDir,"../","views","contact.html"));
  
});
router.post("/success", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir,"../","views","success.html"));
});



module.exports = router;