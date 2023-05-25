const path = require("path");
const rootDir = require("../util/path");
const express = require("express");
const router = express.Router();
const productcontroller =require("../controllers/product");

router.get("/add-product",productcontroller.addproduct );
router.post("/product",productcontroller.product );

module.exports = router;