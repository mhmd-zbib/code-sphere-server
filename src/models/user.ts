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

    // checking if exists
    if (existingUser.length > 0) {
      let errors: any = {};
      if (existingUser.some((user) => user.username === username)) {
        errors.username = "Username already in use";
      }
      if (existingUser.some((user) => user.email === email)) {
        errors.email = "Email already in use";
      }
      throw ApiError.badRequest("Signup failed", errors);
    }
    return await this.userClient.create({
      data: {
        username: username,
        email: email,
        password: password,
      },
    });
  }

  async findByUsernameOrEmail(usernameOrEmail: string) {
    return await this.userClient.findFirst({
      where: {
        email: usernameOrEmail,
        username: usernameOrEmail,
      },
    });
  }
}

export const userModel = new UserModel();
