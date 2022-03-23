const db = require("../config/database");

async function showDrink(req, res, next) {
  try {
    const { id } = req.params;
    const { rows } = await db.query("SELECT * FROM drinks WHERE id = $1", [id]);
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

function showCart(req, res, next) {
  try {
    res.render("javahut/cart");
  } catch (err) {
    console.log(err);
    next(err);
  }
}

async function addToCart(req, res, next) {
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

module.exports = {
  showDrink,
  showFood,
  showCart,
  addToCart,
};
