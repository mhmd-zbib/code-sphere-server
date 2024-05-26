import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function main() {
  const user1 = await prisma.user.create({
    data: {
      username: "John Doe",
      avatar: "AvatarURL1",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      username: "Jane Smith",
      avatar: "AvatarURL2",
    },
  });

  const post1 = await prisma.post.create({
    data: {
      title: "Look amazing post",
      description: "Testing from the backend to get the data",
      collaborationType: "PUBLIC",
      userId: user2.id,
      requiredSkills: ["SQL", "React"],
      projectLink: "http://github.com/test",
    },
  });

  console.log("added");
}
