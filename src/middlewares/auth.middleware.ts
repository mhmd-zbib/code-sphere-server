import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

const validationRules = [
  body("username").notEmpty().withMessage("Username is required"),
  body("email").isEmail().withMessage("Invalid email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

async function validate(req: Request, res: Response, next: NextFunction) {
  await Promise.all(validationRules.map((validation) => validation.run(req)));

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg);
    return res
      .status(400)
      .json({ message: "Validation failed", errors: errorMessages });
  }
  next();
}

export const authMiddleware = {
  signup: validate,
};
