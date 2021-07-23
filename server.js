const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");
const server = express();

const authRouter = require("./auth/auth-router");
const imageRouter = require("./routes/image-routers");
const userRouter = require("./routes/users");

server.use(cors());
server.use(bodyParser.json());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/images", imageRouter);
server.use("/users", userRouter);

server.get("/", (req, res) => {
  res.status(200).json("Api is working");
});

mongoose.connect(
  process.env.MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB!");
  }
);

module.exports = server;
