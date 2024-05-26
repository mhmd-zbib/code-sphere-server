/**
 * Index route of the application
 */

import express, { Request, Response, Router } from "express";
import authRouter from "./auth.router";
import postRouter from "./posts.router";
import userRouter from "./users.router";

const router: Router = express.Router();

router.use("/posts", postRouter);
router.use("/users", userRouter);
router.use("/auth", authRouter);

router.get("/ping", (req: Request, res: Response) => {
  res.send("pong");
});

export default router;
