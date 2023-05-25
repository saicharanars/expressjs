const path = require("path");
const rootDir = require("../util/path");

exports.addproduct=(req, res, next) => {
    // res.send(
    //   '<form action="/admin/product" method="POST" ><label for="name">name</label><input type="text" id="name" name="name"><label for="size"> size</label><input type="text" id="size" name="size"><button type="submit">Submit</button></form>'
    // );
    
    res.sendFile(path.join(rootDir,"../","views","addproduct.html"));
  };
  exports.product=(req, res, next) => {
    console.log(req.body);
    res.redirect("/shop");
  };