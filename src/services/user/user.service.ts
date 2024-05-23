import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient().user;

const getAllUsers = async () => {
  const user = await prisma.findMany({
    include: {
      posts: true,
    },
  });

  return user;
};

const createUser = async (userData: UserType) => {
  console.log(userData.name, "mans name here");

  // const user = await prisma.create({ data: userData });
};

export const userService = {
  getAllUsers,
  createUser,
};
