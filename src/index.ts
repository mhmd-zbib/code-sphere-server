import express, { Express } from "express";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServer } from "@apollo/server";
import router from "./routes";
import { typeDefs, resolvers } from "../graphql";

const app: Express = express();
const port = 4000;

const serverSetup = async () => {
  const apollo = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apollo.start();

  app.use("/", router);
  app.use(express.json());
  app.use(express.urlencoded({ extended: true })); //read docs to understand
  app.use("/graphql", expressMiddleware(apollo));

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Graphql is running on port http://localhost:${port}/graphql`);
  });
};

serverSetup();
