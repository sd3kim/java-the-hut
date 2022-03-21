const db = require("../config/database");

<<<<<<< HEAD
async function index(req, res, next) {
  try {
    const { rows } = await db.query("SELECT * FROM foods");
    res.render("javahut/menu.ejs", { products: rows });
  } catch (err) {
    next(err);
  }
}
async function create(res, req, next) {
  const { name } = req.body;
}

module.exports = {
  index,
  create,
=======
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
>>>>>>> 4c2ccb0226e820128cd5f9b2ee4cffce1c4395da
};
