import express, { Router, Request, Response } from "express";
import questionsRouter from "./questions.routes.js";

const router: Router = express.Router();

router.use("/q", questionsRouter);

router.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the base route!");
});

export default router;
