const express = require("express");
const router = express.Router();
const Images = require("../models/image-models");

router.post("/", upload.single('image'), (req,res) => {
  res.status(200).send()
  if (err) throw err
})

module.exports = router;