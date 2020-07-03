const express = require("express");
const router = express.Router();
const Images = require("../models/image-models");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");


require('dotenv/config');

const storage = new GridFsStorage({
  url: process.env.DB_CONNECTION,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err)
        }
        const filename = file.originalname
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads',
        }
        resolve(fileInfo)
      })
    })
  },
})


const upload = multer({ storage }); 

router.post("/", upload.single('image'), (req,res) => {
  res.status(200).send()
  if (err) throw err
})

module.exports = router;