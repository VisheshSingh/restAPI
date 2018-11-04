// import express from node_modules
const express = require("express");

// Make app use express
const app = express();

app.get("/", (req, res) => {
  res.json({ info: "The users API is available at /users" });
});

// listen to port
app.listen(9090, () => {
  console.log("Server running at port 9090...");
});
