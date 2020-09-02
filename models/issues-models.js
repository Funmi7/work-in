const mongoose = require("mongoose");

const issuesSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  }
})