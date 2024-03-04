const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userData = [
  { id: 1, name: "sree", compamy: "wac" },
  { id: 2, name: "ravi", compamy: "ust" },
  { id: 3, name: "sreeja", compamy: "airindia" },
];

app.get("/login", (req, res) => {
  res.json(userData);
});

const userArray=[]

app.post("/addUser", (req, res) => {
  const { name } = req.body;
  userArray.push(name)
  const data = req.body;
  res.json(userArray)
  console.log(data);
});

app.get("*", (req, res) => {
  res.json("NO Route");
});

app.listen(8000);
