import { Router } from "express";
import { questionsController as controller } from "../controllers/questions/questions.controller.js";

const questionsRouter = Router();

questionsRouter.get("/", (req, res) => {
  res.send("hellos");
});

export default questionsRouter;
