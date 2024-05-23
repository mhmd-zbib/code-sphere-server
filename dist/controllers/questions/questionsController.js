import { questionService } from "../../services/questions/questions.service";
const getQuestions = (req, res) => {
    try {
        const questions = questionService.getQuestions();
        res.status(200).send(questions); // Send the questions array directly
    }
    catch (err) {
        res.status(500).send("An error occurred");
    }
};
export const questionsController = {
    getQuestions,
};
