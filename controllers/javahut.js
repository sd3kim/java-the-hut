const { send } = require("express/lib/response");
const { rows } = require("pg/lib/defaults");
const db = require("../config/database");

async function index(req, res, next) {
  try {
    const { rows } = await db.query("SELECT * FROM drinks");
    res.render("javahut/menu.ejs", { products: rows });
  } catch (err) {
    next(err);
  }
}

// async function show(req, res, next) {
//   try {
//     const { id } = req.params;
//     const { rows } = await db.query("SELECT * FROM drinks  WHERE id =$1", [id]);
//     res.render("javahut/product", { product: rows[0] });
//   } catch (err) {
//     console.log(err);
//   }
// }
async function index(req, res, next) {
  try {
    const drinks = await db.query("SELECT * FROM drinks");
    const food = await db.query("SELECT * FROM foods");
    res.render("javahut/menu", { drinks: drinks.rows, food: food.rows });
  } catch (err) {
    next(err);
  }
}

// async function create(res, req, next) {
//   const { size } = req.body;
//   const { rows } = await db.query("INSERT INTO drinks (size) VALUES ($1)", [
//     size,
//   ]);
//   res.redirect("/cart");
// }

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

// function product(req, res, next) {
//   res.render("javahut/product");
// }

// function cart(req, res, next) {
//   res.render("javahut/cart");
// }

module.exports = {
  index,
  //   show,
  //   create,
  showDrink,
  showFood,
};
