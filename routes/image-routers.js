const express = require("express");
const router = express.Router();
const Image = require("../models/image-models");
const User = require("../models/users");
const multer = require("multer");
const { Router } = require("express");
const restricted = require("../auth/authenticate-middleware");
require("dotenv/config");

function validateUserId(req, res, next) {
  User.findById(req.body.params)
    .then((user) => {
      if (user) {
        req.user = user;
        next();
      } else {
        res.status(400).json({
          message: "Inavlid user id",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        error: `Can't load the user id ${error.message}`,
      });
    });
}

const upload = multer({
  limits: {
    fileSize: 500000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg)$/)) {
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

router.get("/", async (req, res) => {
  try {
    const images = await Image.find({});
    res.send(images);
  } catch (error) {
    res.status(500).send({ get_error: "Error while getting list of images" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const result = await Image.findById(req.params.id);
    res.set("Content-Type", "image/jpeg");
    res.send(result.image);
  } catch (error) {
    res.status(400).send({ get_error: "Error while getting images" });
  }
});

module.exports = router;
