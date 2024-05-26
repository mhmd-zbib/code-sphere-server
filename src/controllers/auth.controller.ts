import { NextFunction, Request, Response } from "express";
import { authService } from "../services/auth.service";

async function test(req: Request, res: Response, next: NextFunction) {
  const postData = req.body;
  console.log(req.body);

  try {
    console.log(postData);
    const post = await authService.test(postData);
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
}

export const authController = {
  test,
};
