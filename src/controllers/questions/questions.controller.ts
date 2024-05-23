import { Request, Response } from "express";
import { questionService } from "../../services/questions/questionsService.js";

const getQuestions = (req: Request, res: Response) => {
  try {
    const questions = questionService.getQuestions();
    res.status(200).send(`Questions fetched successfully for ${questions}`);
  } catch (err) {
    res.status(500).send("An error occurred");
  }
};

export const questionsController = {
  getQuestions,
};
