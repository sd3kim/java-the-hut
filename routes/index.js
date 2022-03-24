var express = require("express");
var router = express.Router();
const javahutCtrl = require("../controllers/javahut");
const db = require("../config/database");

router.get("/home", javahutCtrl.home);

router.get("/menu", javahutCtrl.index);

module.exports = router;
