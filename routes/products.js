var express = require("express");
var router = express.Router();
const productCtrl = require("../controllers/products");
const db = require("../config/database");

router.get("/drink_products/:id", productCtrl.showDrink);

router.get("/food_products/:id", productCtrl.showFood);

// router.get("/cart", productCtrl.showCart);

// router.post("/cart", productCtrl.addToCart);

module.exports = router;
