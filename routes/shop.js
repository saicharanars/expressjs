const path = require("path");
const rootDir = require("../util/path");
const express = require("express");
const router = express.Router();
const shopcontroller =require('../controllers/shop');
router.get("/shop",shopcontroller.shop );
router.get("/contact",shopcontroller.contact );
router.post("/success",shopcontroller.success);



module.exports = router;