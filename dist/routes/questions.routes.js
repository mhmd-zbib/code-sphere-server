import { Router } from "express";
const questionsRouter = Router();
questionsRouter.get("/", (req, res) => {
    res.send("hellos");
});
export default questionsRouter;
