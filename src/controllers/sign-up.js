const { addNewUserQuery, hasUsernameTakenQuery } = require('../database/queries');
const { signUpValidation } = require('../validation');
const { hashPassword } = require('../utils');
const { logIn } = require('./login');

const signUp = (req, res) => {
  const { username, password } = req.body;

  signUpValidation(req.body)
    .then(() => hasUsernameTakenQuery({ username }))
    .then(() => hashPassword(password))
    .then((hashedPassword) => addNewUserQuery({ username, hashedPassword }))
    .then(() => logIn({ body: { username, password } }, res))
    .catch((dbError) => res.json(`${dbError}`));
};

module.exports = { signUp };
