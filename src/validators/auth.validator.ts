import { PrismaClient } from "@prisma/client";
import ApiError from "../utils/api-error";
const userClient = new PrismaClient().user;

async function signup(username: string, email: string) {
  const existingUser = await userClient.findMany({
    where: {
      OR: [{ username: username }, { email: email }],
    },
  });

  if (existingUser.length > 0) {
    if (existingUser.some((user) => user.username === username)) {
      throw ApiError.badRequest("Username already exists");
    }
    if (existingUser.some((user) => user.email === email)) {
      throw ApiError.badRequest("Email already exists");
    }
  }
}

export const authValidator = {
  signup,
};
