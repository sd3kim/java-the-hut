var express = require("express");
var router = express.Router();
const cartCtrl = require("../controllers/cart");

router.get("/cart", cartCtrl.index);

router.post("/cart", cartCtrl.create);

router.post("/message", cartCtrl.createMessage);

router.delete("/cart/:id", cartCtrl.delete);

module.exports = router;
