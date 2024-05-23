import { readFileSync } from "fs";
import path from "path";
import { usersResolver } from "./resolvers/user.resolver";

const userTypes = readFileSync(path.join(__dirname, "./typeDefs/user.graphql"));

export const typeDefs = `%{userTypes}`;

export const resolvers = {
  Query: {
    ...usersResolver.Query,
  },
};
