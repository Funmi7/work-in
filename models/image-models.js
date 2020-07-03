const mongoose = require("mongoose");
// const GridFsStorage = require("multer-gridfs-storage");
// const multer = require("multer");
// require('dotenv/config');

// const storage = new GridFsStorage({
//   url: process.env.DB_CONNECTION,
//   file: (req, file) => {
//     return new Promise((resolve, reject) => {
//       crypto.randomBytes(16, (err, buf) => {
//         if (err) {
//           return reject(err)
//         }
//         const filename = file.originalname
//         const fileInfo = {
//           filename: filename,
//           bucketName: 'uploads',
//         }
//         resolve(fileInfo)
//       })
//     })
//   },
// })

// const upload = multer({ storage })

const imageSchema = new mongoose.Schema({
  name: String,
  desc: String,
  img:
  {
    data: Buffer,
    contentType: String
  }
});

module.exports = new mongoose.model('Images', image)
