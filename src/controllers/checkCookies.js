const { jwtVerifyPromise } = require('../utils');

const checkCookies = (req, res, next) => {
  const token = req.cookies.info;
  jwtVerifyPromise(token)
    .then((decoded) => {
      req.userInfo = decoded;

      next();
    })
    .catch(() => res.json('err'));
};
module.exports = { checkCookies };
