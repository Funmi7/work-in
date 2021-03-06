const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

module.exports = (req, res, body) => {
  const token = req.headers.authorization;

  if(token){
    jwt.verify(
      token,
      secrets.jwtSecret,
      (err, decodedToken) => {
        if(err) {
          res.status(401).json({message: err.message})
        } else {
          req.decodedToken = decodedToken;
          next()
        }
      }
    )
  }
}