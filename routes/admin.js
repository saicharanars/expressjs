const express = require("express");
const router = express.Router();
router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/admin/product" method="POST" ><label for="name">name</label><input type="text" id="name" name="name"><label for="size"> size</label><input type="text" id="size" name="size"><button type="submit">Submit</button></form>'
  );
});
router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/shop");
});

module.exports = router;