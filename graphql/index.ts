import path from "path";
import postResolver from "./resolvers/posts.resolver";

export const typeDefs = `
type User {
  id: Int!
  username: String!
  avatar: String
  posts: [Post!]!
}


type Post {
  id: Int!
  title: String!
  description: String!
  collaborationType: String!
  requiredSkills: [String!]!
  projectLink: String
  comments: Int!
  supportPlatform: String
  supportEmail: String
  user: User!
}

type Query {
  getPosts: [Post!]!
  getUsers: [User!]!

}
`;

export const resolvers = {
  Query: {
    ...postResolver.Query,
  },
};
