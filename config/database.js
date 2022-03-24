const { Pool } = require("pg");
const connectionString =
  "postgresql://dbuser:secretpassword@database.server.com:3211/mydb";

const pool = new Pool({
  connectionString: process.env.DATABSE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
