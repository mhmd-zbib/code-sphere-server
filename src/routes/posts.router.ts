import { Router } from "express";
import { postController } from "../controllers/posts.controller";
const postRouter = Router();

postRouter.get("/", postController.getAllPosts);

postRouter.get("/:userId", postController.getFeed);

export default postRouter;
