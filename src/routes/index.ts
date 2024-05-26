/**
 * Index route of the application
 */

import express, { Router, Request, Response } from "express";
import postRouter from "./posts.router";
import userRouter from "./users.router";
import authRouter from "./auth.router";
import ApiError from "../utils/api-error";

const router: Router = express.Router();

router.use("*", (req, res, next) => {
  next(ApiError.badRequest("No access"));
  return;
});

router.use("/posts", postRouter);
router.use("/users", userRouter);
router.use("/auth", authRouter);

router.get("/ping", (req: Request, res: Response) => {
  res.send("pong");
});

export default router;
