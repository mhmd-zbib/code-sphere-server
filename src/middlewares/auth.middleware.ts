import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import ApiError from "../utils/api-error";

const validationRules = [
  body("username").notEmpty().withMessage("Username is required"),
  body("email").isEmail().withMessage("Invalid email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

async function validateSignup(req: Request, res: Response, next: NextFunction) {
  await Promise.all(validationRules.map((validation) => validation.run(req)));
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg);
    const error = ApiError.badRequest("Signup failed", {
      details: errorMessages,
    });
    return next(error);
  }
  next();
}



export const authMiddleware = {
  signup: validateSignup,
};
