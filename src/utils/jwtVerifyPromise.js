const jwt = require('jsonwebtoken');

const jwtVerifyPromise = (token) => new Promise((resolve, reject) => {
  jwt.verify(token, process.env.SECRECT_KEY, (err, decoded) => {
    if (err) reject(err);
    resolve(decoded);
  });
});

module.exports = { jwtVerifyPromise };
