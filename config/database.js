// npm i --save pg

//destructure Pool from pg
const { Pool } = require("pg");

//create a new Pool connection with our credentials
const pool = new Pool({
  user: "sarahkim",
  host: "localhost",
  database: "javahut",
  password: "0253",
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
