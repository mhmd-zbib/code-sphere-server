const cors = require("cors");
import express, { Express } from "express";
import router from "./routes";
import { errorHandler } from "./utils/error-handler";

const app: Express = express();
const port = 4000;

const serverSetup = async () => {
  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );

  app.use(express.json()); // Parse JSON bodies
  app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

  app.use("/", router);

  app.use(errorHandler);

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

serverSetup();
