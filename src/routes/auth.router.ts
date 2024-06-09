import { Router } from "express";
import { authController } from "../controllers/auth.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
const authRouter = Router();

authRouter.post("/signup", authMiddleware.signup, authController.signup);
authRouter.post("/login", authMiddleware.signup, authController.login);

export default authRouter;
