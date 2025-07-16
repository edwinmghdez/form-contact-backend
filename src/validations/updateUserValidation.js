const { check } = require("express-validator");

const updateUserValidation = [
  check("first_name")
    .notEmpty()
    .isLength({ min: 4 })
    .withMessage(
      "The first name is too short and must contain at least 4 characters"
    ),

  check("last_name")
    .notEmpty()
    .isLength({ min: 4 })
    .withMessage(
      "The last name is too short and must contain at least 4 characters"
    ),

  check("email")
    .isEmail()
    .withMessage("Must be a valid email")
    .normalizeEmail(),

  check("phone_number")
    .notEmpty()
    .matches(/^\+?[0-9\s\-]{7,15}$/)
    .withMessage(
      "Phone number must be valid and contain only numbers, spaces, dashes, or a leading +"
    ),
];

module.exports = updateUserValidation;
