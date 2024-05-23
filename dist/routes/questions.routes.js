"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const questions = express.Router();
const questions_controller_js_1 = require("../controllers/questions/questions.controller.js");
questions.get("/", questions_controller_js_1.questionsController.getQuestions);
module.exports = questions;
