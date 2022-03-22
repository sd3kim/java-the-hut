const db = require("../config/database");

function home(req, res, next) {
  res.render("landing");
}

async function index(req, res, next) {
  try {
    const drinks = await db.query("SELECT * FROM drinks");
    const food = await db.query("SELECT * FROM food");
    res.render("javahut/menu", { drinks: drinks.rows, food: food.rows });
  } catch (err) {
    next(err);
  }
}

async function showDrink(req, res, next) {
  try {
    const { id } = req.params;
    const { rows } = await db.query("SELECT * FROM drinks WHERE id = $1", [id]);
    console.log(rows);
    res.render("javahut/drink_products", { drinks: rows[0] });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

async function showFood(req, res, next) {
  try {
    const { id } = req.params;
    const { rows } = await db.query("SELECT * FROM food WHERE id = $1", [id]);
    res.render("javahut/food_products", { food: rows[0] });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

// function menu(req, res, next) {
//   res.render("javahut/menu");
// }

// function product(req, res, next) {
//   res.render("javahut/product");
// }

// function cart(req, res, next) {
//   res.render("javahut/cart");
// }

module.exports = {
  home,
  index,
  showDrink,
  showFood,
  // menu,
  // product,
  // cart,
};
