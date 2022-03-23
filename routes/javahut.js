var express = require("express");
var router = express.Router();
const javahutCtrl = require("../controllers/javahut");

const db = require("../config/database");

router.get("/home", javahutCtrl.home);

router.get("/menu", javahutCtrl.index);

router.get("/drink_products/:id", javahutCtrl.showDrink);

router.get("/food_products/:id", javahutCtrl.showFood);

module.exports = router;
