const db = require("../config/database");

// show all items in cart page
async function index(req, res, next) {
  try {
    const { rows } = await db.query("SELECT * FROM orders");
    res.render("javahut/cart", { order: rows });
  } catch (err) {
    next(err);
  }
}

// add to cart not orders
async function addToCart(req, res, next) {
  const { name, id } = req.body;
  const text = await db.query("SELECT * FROM orders WHERE drink_id =$1", [id]);
  const { rows } = await db.query(
    "INSERT INTO orders (drink_id, name) VALUES ($1,$2) ",
    [id, name]
  );
}

async function deleteProduct(req, res, next) {
  try {
    const { id } = req.params;
    const { rows } = await db.query("DELETE FROM orders WHERE id= $1", [id]);
    res.redirect("/cart");
  } catch (err) {
    next(err);
  }
}

async function send(req, res, next) {
  try {
    const { quantity } = req.body;
    console.log("this is body", quantity);
    const { rows } = await db.query("SELECT * FROM orders");
    res.render("javahut/message", { order: rows, quantity: quantity });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  index,
  addToCart,
  delete: deleteProduct,
  send,
};
