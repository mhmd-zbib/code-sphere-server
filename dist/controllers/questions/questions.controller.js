"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionsController = void 0;
const questionsService_js_1 = require("../../services/questions/questionsService.js");
const getQuestions = (req, res) => {
    try {
        const questions = questionsService_js_1.questionService.getQuestions();
        res.status(200).send(`Questions fetched successfully for ${questions}`);
    }
    catch (err) {
        res.status(500).send("An error occurred");
    }
};
exports.questionsController = {
    getQuestions,
};
