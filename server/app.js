const express = require("express");
const app = express();

app.get("/query-data", (req, res) => {
  res.json("First Contact!");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
