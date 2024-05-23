/**
 * Index route of the application
 */
import express from "express";
import questionsRouter from "./questions.routes.js";
const router = express.Router();
router.use("/q", questionsRouter);
router.get("/", (req, res) => {
    res.send("Welcome to the base route!");
});
export default router;
