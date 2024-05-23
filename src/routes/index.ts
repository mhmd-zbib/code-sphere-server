const express = require("express");
const questions = require("./questions.routes");
const router = express.Router();
import { Request, Response } from "express";

router.get("/", (req: Request, res: Response) => {
  res.send("We working!");
});

router.use("/q", questions);

module.exports = router;
