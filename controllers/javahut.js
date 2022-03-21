const db = require("../config/database");

function home(req, res, next) {
  res.render("landing");
}

function menu(req, res, next) {
  res.render("javahut/menu");
}

function product(req, res, next) {
  res.render("javahut/product");
}

function cart(req, res, next) {
  res.render("javahut/cart");
}

module.exports = {
  home,
  menu,
  product,
  cart,
};
