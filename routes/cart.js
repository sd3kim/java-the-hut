var express = require("express");
const createApplication = require("express/lib/express");
var router = express.Router();
const cartCtrl = require("../controllers/cart");

router.get("/cart", cartCtrl.index);

router.post("/cart", cartCtrl.addToCart);

router.delete("/cart/:id", cartCtrl.delete);

router.post("/message", cartCtrl.send);
module.exports = router;
