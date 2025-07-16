const db = require("./db");

const userTable = async () => {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        email VARCHAR(150) NOT NULL UNIQUE,
        phone_number VARCHAR(20)
      );
    `);
    console.log("✅ Users table ensured");
  } catch (err) {
    console.error("❌ Error creating users table:", err);
  }
};

module.exports = userTable;
