import express, { Express, NextFunction, Request, Response } from "express";
import router from "./routes";
import { main } from "../test/functions/seed";
import ApiError from "./utils/api-error";
import { errorHandler } from "./utils/error-handler";
const cors = require("cors");

const app: Express = express();
const port = 4000;

const serverSetup = async () => {
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  app.use("/", router);
  app.use(express.json());
  app.use(express.urlencoded({ extended: true })); // Note: read docs to understand

  interface ApiError extends Error {
    statusCode?: number;
    status?: string;
  }

  app.use(errorHandler);

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

serverSetup();
