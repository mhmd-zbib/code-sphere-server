import { Router } from "express";
import { authController } from "../controllers/auth.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
const authRouter = Router();

authRouter.post("/login", authMiddleware.signup, authController.signup);

export default authRouter;
