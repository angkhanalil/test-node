require("dotenv").config();
const express = require("express");

const app = express();

// simple route
app.get("/", (req, res) => {
  console.log("welcome");
  res.json({ message: "Welcome to test-node application." });
});

// 404 Error
app.use((req, res, next) => {
  res.status(404).send("Error 404!");
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
