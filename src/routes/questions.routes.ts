const express = require("express");
const questions = express.Router();
import { questionsController as controller } from "../controllers/questions/questions.controller.js";

questions.get("/", controller.getQuestions);

module.exports = questions;
