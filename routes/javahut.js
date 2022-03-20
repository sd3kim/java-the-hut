var express = require("express");
var router = express.Router();

const db = require("../config/database");

router.get("/home", (req, res) => {
  res.render("landing");
});

router.get("/menu", (req, res) => {
  res.render("javahut/menu.ejs");
});

router.get("/product", async (req, res) => {
  const test = await db.query("SELECT * FROM drinks");
  console.log(test);
  res.render("javahut/product");
});

router.get("/cart", (req, res) => {
  res.render("javahut/cart");
});

module.exports = router;
