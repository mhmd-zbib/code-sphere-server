import express, { Express } from "express";

const app: Express = express();
const port = 4000;

app.get("/test", (req, res) => {
  res.send("Server is running TOO!");
});

app.listen(port, () => {
  console.log(`Server is running on peyysssort ${port}`);
});
