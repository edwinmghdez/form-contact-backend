const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  // user: "root",
  // password: "root",
  // host: "localhost",
  // port: 5432,
  // database: "form_contact_db",
  connectionString: process.env.DATABASE_URL,
});

pool.on("connect", () => {
  console.log("DB connected successfully");
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
