import { NextFunction, Request, Response } from "express";
import { authService } from "../services/auth.service";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt";

async function signup(req: Request, res: Response, next: NextFunction) {
  try {
    const { username, email, password } = req.body;
    const user = await authService.signup(username, email, password);
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    res.cookie("token", accessToken, {
      // httpOnly: true,
      maxAge: 3600000,
      secure: true,
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    next(err);
  }
}

async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { usernameOrEmail, password } = req.body;
    const user = await authService.login(usernameOrEmail, password);
  } catch (err) {
    next(err);
  }
}

export const authController = {
  signup,
  login,
};
