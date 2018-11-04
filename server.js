// import express from node_modules
const express = require("express");

// Make app use express
const app = express();

app.get("/", (req, res) => {
  res.json({ info: "The users API is available at /users" });
});

// GET REQUEST
app.get("/users", (req, res) => {
  res.json({ info: "GET request..." });
});
// POST REQUEST
app.post("/users", (req, res) => {
  res.json({ info: "POST request..." });
});
// PUT REQUEST
app.put("/users", (req, res) => {
  res.json({ info: "PUT request..." });
});
// DELETE REQUEST
app.delete("/users", (req, res) => {
  res.json({ info: "DELETE request..." });
});

// listen to port
app.listen(9090, () => {
  console.log("Server running at port 9090...");
});
