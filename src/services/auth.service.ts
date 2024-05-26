import { PrismaClient } from "@prisma/client";
import { userModel } from "../models/user";
import { hashString } from "../utils/hash";
import { generateAccessToken } from "../utils/jwt";
const userClient = new PrismaClient().user;

async function signup(username: string, email: string, password: string) {
  const hashedPassword = await hashString(password);
  const user = await userModel.create(username, email, hashedPassword);

  const accessToken = generateAccessToken({
    id: user.id,
    username: username,
    email: email,
  });

  return accessToken;
}

export const authService = {
  signup,
};
