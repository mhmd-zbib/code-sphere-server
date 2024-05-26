import { PrismaClient } from "@prisma/client";
const postClient = new PrismaClient().post;

const getFeed = async (
  userId: string,
  page: number = 1,
  limit: number = 10
) => {
  try {
    const feed = await postClient.findMany({
      where: { userId: parseInt(userId) },
      orderBy: { createdAt: "desc" },
      take: limit,
      skip: (page - 1) * limit,
    });

    return { feed };
  } catch (e) {
    console.error(e);
    throw new Error("Error fetching feed");
  }
};

const getAllPosts = async () => {
  console.log("on service");
  const posts = await postClient.findMany({
    include: {
      user: true,
    },
  });

  return posts;
};

export const postService = {
  getFeed,
  getAllPosts,
};
