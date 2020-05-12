const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require('dotenv/config');
const server = express();

server.use(cors());
server.use(bodyParser.json());

server.get("/", (req, res) => {
  res.status(200).json("Api is working");
});

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  () => {
    console.log("Connected to DB!");
  }
);

module.exports = server;
