import { PrismaClient } from "@prisma/client";
import ApiError from "../utils/api-error";

class UserModel {
  private userClient;

  constructor() {
    this.userClient = new PrismaClient().user;
  }

  async create(username: string, email: string, password: string) {
    const existingUser = await this.userClient.findMany({
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

    return await this.userClient.create({
      data: {
        username: username,
        email: email,
        password: password,
      },
    });
  }
}

export const userModel = new UserModel();
