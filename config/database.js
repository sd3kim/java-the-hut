const { Pool } = require("pg");
//create a new Pool connection with our credentials
const pool = new Pool({
  connectionString: process.env.DATABSE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
