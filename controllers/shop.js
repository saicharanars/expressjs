const path = require("path");
const rootDir = require("../util/path");
exports.shop=(req, res, next) => {
    console.log("in middleware");
    console.log(path.join(rootDir,"../","views","shop.html"));
    res.sendFile(path.join(rootDir,"../","views","shop.html"));
    //next();
    //next();//allow request to continue next request
  };
  exports.contact=(req, res, next) => {
    console.log("in middleware");
    console.log(path.join(rootDir,"../","views","shop.html"));
    res.sendFile(path.join(rootDir,"../","views","contact.html"));
    
  };
  exports.success= (req, res, next) => {
    console.log(req.body);
    res.sendFile(path.join(rootDir,"../","views","success.html"));
  };