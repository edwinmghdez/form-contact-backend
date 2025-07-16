const customException = require("../exceptions/CustomException");
const db = require("../config/db");

class UserRepository {
  async index() {
    const result = await db.query("SELECT * FROM users ORDER BY id ASC");
    return result.rows;
  }

  async show(id) {
    const result = await db.query("SELECT * FROM users WHERE id = $1", [id]);
    const user = result.rows[0];

    if (!user) {
      throw new customException("User not found", 404);
    }

    return user;
  }

  async store(payload) {
    const { first_name, last_name, email, phone_number } = payload;
    const result = await db.query(
      "INSERT INTO users (first_name, last_name, email, phone_number) VALUES ($1, $2, $3, $4) RETURNING *",
      [first_name, last_name, email, phone_number]
    );
    return result.rows[0];
  }

  async update(id, payload) {
    const user = await this.show(id);

    const { first_name, last_name, email, phone_number } = payload;

    const result = await db.query(
      "UPDATE users SET first_name = $1, last_name = $2, email = $3, phone_number = $4 WHERE id = $5 RETURNING *",
      [first_name, last_name, email, phone_number, id]
    );

    const updatedUser = result.rows[0];

    return await this.show(updatedUser.id);
  }

  async delete(id) {
    const user = await this.show(id);

    return await db.query("DELETE FROM users WHERE id = $1", [id]);
  }
}

module.exports = new UserRepository();
