/**
 * Index route of the application
 */

import express, { Router, Request, Response } from "express";
import questionsRouter from "./questions.router";
import userRouter from "./user.router";

const router: Router = express.Router();

router.use("/questions", questionsRouter);
router.use("/user", userRouter);

router.get("/ping", (req: Request, res: Response) => {
  res.send("pong");
});

export default router;
