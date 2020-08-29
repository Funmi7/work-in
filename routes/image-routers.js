const express = require("express");
const router = express.Router();
const Image = require("../models/image-models");
const multer = require("multer");
const { Router } = require("express");

require("dotenv/config");

const upload = multer({
  limits: {
    fileSize: 500000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png)$/)) {
      cb(new Error("only upload files with jpg or jpeg format."));
    }
    cb(undefined, true);
  },
});

router.post(
  "/",
  upload.single("image"),
  async (req, res) => {
    try {
      const image = new Image(req.body);
      const file = req.file.buffer;
      image.image = file;

      await image.save();
      res.status(201).send({ _id: image._id });
    } catch (error) {
      res.status(500).send({
        upload_error: "Error while uploading file.... Try again later.",
      });
    }
  },
  (error, req, res, next) => {
    if (error) {
      res.status(500).send({
        upload_error: error.message,
      });
    }
  }
);

module.exports = router;
