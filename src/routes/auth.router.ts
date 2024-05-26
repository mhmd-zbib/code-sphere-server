import { Router } from "express";
import { authController } from "../controllers/auth.controller";
const authRouter = Router();

authRouter.get("/login", authController.test);

export default authRouter;
