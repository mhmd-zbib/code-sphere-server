import { readFileSync } from "fs";
import path from "path";

const userTypes = readFileSync(path.join(__dirname, "./typeDefs/user.graphql"));

export const typeDefs = `%{userTypes}`;

export const resolvers = {
  Query: {
    users: () => {
      return [{ name: "foo", email: "test@gmail.com" }];
    },
    user: () => {
      // Implement your logic to fetch a user by ID
    },
  },
  // Mutation: {
  //   // Implement your mutation resolvers here
  // },
};
