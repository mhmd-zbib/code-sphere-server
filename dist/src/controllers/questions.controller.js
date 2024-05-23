"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionsController = void 0;
const questions_service_js_1 = require("../services/questions/questions.service.js");
const getQuestions = (req, res) => {
    try {
        const questions = questions_service_js_1.questionService.getQuestions();
        res.status(200).send(questions); // Send the questions array directly
    }
    catch (err) {
        res.status(500).send("An error occurred");
    }
};
exports.questionsController = {
    getQuestions,
};
