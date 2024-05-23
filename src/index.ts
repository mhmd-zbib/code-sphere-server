import express, { Express } from "express";
import router from "./routes/index.js";

const app: Express = express();
const port = 4000;

// app.use(router);

app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on peyysssort ${port}`);
});
