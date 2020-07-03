const fs = require('fs'); 
const path = require('path'); 
const multer = require('multer');


// const storage = multer.diskStorage({ 
//   destination: (req, file, cb) => { 
//       cb(null, 'uploads') 
//   }, 
//   filename: (req, file, cb) => { 
//       cb(null, file.fieldname + '-' + Date.now()) 
//   } 
// }); 

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
