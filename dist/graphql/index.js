"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
const posts_resolver_1 = __importDefault(require("./resolvers/posts.resolver"));
exports.typeDefs = `
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
exports.resolvers = {
    Query: Object.assign({}, posts_resolver_1.default.Query),
};
