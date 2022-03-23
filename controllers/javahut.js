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

async function cart(req, res, next) {
  const { id } = req.body;
  const { name } = req.body;
  const drink = await db.query(
    "SELECT drinks.name, drinks.id, drink_id,food_id FROM orders LEFT JOIN drinks ON drinks.id= orders.drink_id LEFT JOIN food ON food.id=orders.food_id"
  );
  const orders = await db.query(
    "INSERT INTO orders (drink_id, name) VALUES ($1,$2) ",
    [id, name]
  );
  const { rows } = await db.query("SELECT * FROM orders");
  res.render("javahut/cart", { order: rows });
}

async function deleteProduct(req, res, next) {
  try {
    const { id } = req.params;
    const { name } = req.body;
    console.log("this is ", id);
    const { rows } = await db.query("DELETE FROM orders WHERE id= $1", [id]);
    const text = await db.query("DELETE FROM orders WHERE name=$1", [name]);
    res.redirect("/cart");
  } catch (err) {
    next(err);
  }
}
module.exports = {
  home,
  index,
  showDrink,
  showFood,
  cart,
  delete: deleteProduct,
};
