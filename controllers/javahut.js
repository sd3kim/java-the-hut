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

async function show(req, res, next) {
  try {
    const { id } = req.params;
    const { rows } = await db.query("SELECT * FROM drinks  WHERE id =$1", [id]);
    res.render("javahut/product", { product: rows[0] });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

async function create(res, req, next) {
  const { size } = req.body;
  const { rows } = await db.query("INSERT INTO drinks (size) VALUES ($1)", [
    size,
  ]);
  res.redirect("/cart");
}

module.exports = {
  index,
  show,
  create,
};
