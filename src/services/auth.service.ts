import { PrismaClient } from "@prisma/client";
import { userModel } from "../models/user";
import { hashString } from "../utils/hash";
const userClient = new PrismaClient().user;

async function signup(username: string, email: string, password: string) {
  const hashedPassword = await hashString(password);
  const user = await userModel.create(username, email, hashedPassword);
  return user;
}

export const authService = {
  signup,
};
