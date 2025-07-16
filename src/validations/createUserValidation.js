const { check } = require("express-validator");
const db = require("../config/db");

const createUserValidation = [
  check("first_name")
    .notEmpty()
    .withMessage("Fisrt name is required")
    .isLength({ min: 4 })
    .withMessage(
      "The first name is too short and must contain at least 4 characters"
    ),

  check("last_name")
    .notEmpty()
    .withMessage("Last name is required")
    .isLength({ min: 4 })
    .withMessage(
      "The last name is too short and must contain at least 4 characters"
    ),

  check("email")
    .isEmail()
    .withMessage("Must be a valid email")
    .normalizeEmail(),
  // .custom(async (value, { req }) => {
  //   const existingUser = await db.query(
  //     "SELECT * FROM users WHERE email = $1",
  //     [value]
  //   );
  //   if (existingUser) {
  //     throw new Error("This email is already in use.");
  //   }
  // }),

  check("phone_number")
    .notEmpty()
    .withMessage("Phone number is required")
    .matches(/^\+?[0-9\s\-]{7,15}$/)
    .withMessage(
      "Phone number must be valid and contain only numbers, spaces, dashes, or a leading +"
    ),
];

module.exports = createUserValidation;
