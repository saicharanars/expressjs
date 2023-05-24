const express = require("express");
const router = express.Router();
router.get("/", (req, res, next) => {
  console.log("in middleware");
  res.send("<h1>hello from express shop</h1>");
  //next();
  //next();//allow request to continue next request
});
module.exports = router;