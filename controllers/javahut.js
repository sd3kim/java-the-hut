const db = require("../config/database");

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
};
