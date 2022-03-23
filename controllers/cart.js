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

async function addToCart(req, res, next) {
  const { id, name } = req.body;
  const { rows } = await db.query(
    "INSERT INTO orders (drink_id, name) VALUES ($1,$2) ",
    [id, name]
  );
  res.redirect("/cart");
}

async function deleteProduct(req, res, next) {
  try {
    const { id } = req.params;
    // const { name } = req.body;
    const { rows } = await db.query("DELETE FROM orders WHERE id= $1", [id]);
    res.redirect("/cart");
  } catch (err) {
    next(err);
  }
}

module.exports = {
  index,
  addToCart,
  delete: deleteProduct,
};
