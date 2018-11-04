// import express from node_modules
const express = require("express");
const Users = require("./Users");
const bodyParser = require("body-parser");

const p = new Users();

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

// GET REQUEST
app.get("/users", (req, res) => {
  res.json(p.getUsers());
});
// POST REQUEST
app.post("/users", (req, res) => {
  let { firstName, lastName, email, phone } = req.body;
  p.addUser(firstName, lastName, email, phone);
  res.json({ info: "User Posted successfully!" });
});
// PUT REQUEST
app.put("/users/:id", (req, res) => {
  let id = parseInt(req.params.id);
  //   console.log(id);
  let { firstName, lastName, email, phone } = req.body;
  p.updateUser(id, firstName, lastName, email, phone);
  res.json({ info: "PUT request successful..." });
});
// DELETE REQUEST
app.delete("/users/:id", (req, res) => {
  let id = parseInt(req.params.id);
  p.deleteUser(id);
  res.json({ info: "DELETED the resource!" });
});

// listen to port
app.listen(9090, () => {
  console.log("Server running at port 9090...");
});
