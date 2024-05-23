"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const questionsRouter = (0, express_1.Router)();
questionsRouter.get("/", (req, res) => {
    res.send("hellos");
});
exports.default = questionsRouter;
