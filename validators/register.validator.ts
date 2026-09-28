import { body } from "express-validator";

export const registerValidation = [
  body("name")
    .isString()
    .withMessage("First name must be string")
    .trim()
    .notEmpty()
    .withMessage("First name must be required")
    .isLength({ min: 2 })
    .withMessage("Name must be at least 2 characters"),

  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username is required")
    .isLength({ min: 3, max: 20 })
    .withMessage("Username must be between 3 and 20 characters")
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage("Username can only contain letters, numbers, and underscores"),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters"),
];
