import { PrismaClient } from "@prisma/client";
import { userModel } from "../models/user";
import { hashString, validateHash } from "../utils/hash";
import { generateAccessToken } from "../utils/jwt";
import ApiError from "../utils/api-error";
const userClient = new PrismaClient().user;

async function signup(username: string, email: string, password: string) {
  const hashedPassword = await hashString(password);
  const user = await userModel.create(username, email, hashedPassword);

  return user;
}

async function login(usernameOrEmail: string, password: string) {
  const user = await userModel.findByUsernameOrEmail(usernameOrEmail);
  if (!user) throw ApiError.notFound("invalid credentials");
  const passwordMatch = await validateHash(password, user.password);
  if (!passwordMatch) throw ApiError.notFound("invalid credentials");

  return user;
}

export const authService = {
  login,
  signup,
};
