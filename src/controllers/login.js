const { jwtSignPromise } = require('../utils');
const { logInValidation } = require('../validation/loginValidation');
const { comparepassword } = require('../utils');
const { getUser } = require('../database/queries');

const logIn = (req, res) => {
  const { username, password } = req.body;
  logInValidation(req.body)
    .then(() => getUser(username))
    .then((response) => {
      if (response.rows.length === 0) {
        return res.json({ message: 'wrong user name or wrong password' });
      }
      return response.rows[0];
    })
    .then((userInfo) => comparepassword(password, userInfo.password))
    .then((result) => {
      if (result) {
        jwtSignPromise(username)
          .then((token) => res.cookie('info', token).json('AUTH'))
          .catch(() => res.json({ message: 'error' }));
      } else {
        res.json({ message: 'wrong user name or wrong password' });
      }
    })
    .catch((err) => res.json(`${err}`));
};
module.exports = { logIn };
