const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello man");
});

app.listen(port, () => {
  console.log("Started Server on port " + port);
});
