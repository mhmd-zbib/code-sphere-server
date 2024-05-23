import { userService } from "../services/user/user.service";
import { Request, Response } from "express";

//getAllUsers
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json({ data: users });
  } catch (err) {
    console.error(err);
  }
};

//creates a dummy user
const createUser = async (req: Request, res: Response) => {
  try {
    console.log("got req");
    console.log(req.body);

    const user = await userService.createUser(req.body);
    res.status(200).json("done");
  } catch (err) {
    console.error(err);
  }
};

//export async function object
export const userController = {
  getAllUsers,
  createUser,
};
