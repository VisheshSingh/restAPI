// import express from node_modules
const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./userRouter");

// Make app use express
const app = express();
app.use(bodyParser.json());

app.use("*", (req, res, next) => {
  console.log(`${req.method} ${req.baseUrl}`);
  next();
});

app.get("/", (req, res) => {
  res.json({ info: "The users API is available at /users" });
});

app.use("/users", userRouter);

// listen to port
app.listen(9090, () => {
  console.log("Server running at port 9090...");
});
