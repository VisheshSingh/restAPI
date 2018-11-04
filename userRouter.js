const express = require("express");
const Users = require("./Users");
const userRouter = express.Router();

const p = new Users();
// GET REQUEST
userRouter.get("/", (req, res) => {
  res.json(p.getUsers());
});

// POST REQUEST
userRouter.post("/", (req, res) => {
  let { firstName, lastName, email, phone } = req.body;
  p.addUser(firstName, lastName, email, phone);
  res.json({ info: "User Posted successfully!" });
});

// PUT REQUEST
userRouter.put("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  //   console.log(id);
  let { firstName, lastName, email, phone } = req.body;
  p.updateUser(id, firstName, lastName, email, phone);
  res.json({ info: "PUT request successful..." });
});

// DELETE REQUEST
userRouter.delete("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  p.deleteUser(id);
  res.json({ info: "DELETED the resource!" });
});

module.exports = userRouter;
