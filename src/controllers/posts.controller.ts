import { Request, Response } from "express";
import { postService } from "../services/posts.service.js";

const getFeed = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const page = parseInt(req.params.page as string) || 1; // page number
  const limit = parseInt(req.params.limit as string) || 10; // query param limit

  try {
    const feed = await postService.getFeed(userId, page, limit);
    res.status(200).send(feed);
  } catch (err) {
    res.status(500).send("An error occurred");
  }
};

const getAllPosts = async (req: Request, res: Response) => {
  try {
    console.log("getting all posts");
    const posts = await postService.getAllPosts();
    console.log(posts);

    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
  }
};

export const postController = {
  getFeed,
  getAllPosts,
};
