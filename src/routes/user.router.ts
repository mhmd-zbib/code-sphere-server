import { Router } from "express";
import { userController } from "../controllers/user.controller";
const userRouter = Router();

userRouter.get("/", userController.getAllUsers);
userRouter.post("/create", userController.createUser);

export default userRouter;
