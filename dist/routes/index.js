"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const questions = require("./questions.routes");
const router = express.Router();
router.get("/", (req, res) => {
    res.send("We working!");
});
router.use("/q", questions);
module.exports = router;
