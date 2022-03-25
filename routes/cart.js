var express = require("express");
var router = express.Router();
const cartCtrl = require("../controllers/cart");
const db = require("../config/database");

router.get("/cart", cartCtrl.index);

router.post("/cart", cartCtrl.addToCart);

router.post("/message", cartCtrl.send);

router.delete("/cart/:id", cartCtrl.delete);

module.exports = router;
