import { GraphQLResolveInfo } from "graphql";

const cats = [
  { id: "1", name: "Fluffy", breed: "Persian" },
  { id: "2", name: "Whiskers", breed: "Siamese" },
  { id: "3", name: "Felix", breed: "Maine Coon" },
];

export const usersResolver = {
  Query: {
    hello: () => "hello world",
    cats: () => cats,
  },

  Mutation: {
    async createUser() {},
    async updateUser() {},
  },
};
