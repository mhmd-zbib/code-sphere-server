import { NextFunction, Request, Response } from "express";
import { authService } from "../services/auth.service";
import ApiError from "../utils/api-error";
import { validationResult } from "express-validator";

async function signup(req: Request, res: Response, next: NextFunction) {
  try {
    const { username, email, password } = req.body;

    await authService.signup(username, email, password);
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    next(err);
  }
}

export const authController = {
  signup,
};
