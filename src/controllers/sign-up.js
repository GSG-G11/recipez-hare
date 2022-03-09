const { addNewUserQuery, hasUsernameTakenQuery } = require('../database/queries');
const { signUpValidation } = require('../validation');
const { hashPassword } = require('../utils');

const signUp = (req, res) => {
  const { username, password } = req.body;

  signUpValidation(req.body)
    .then(() => hasUsernameTakenQuery({ username }))
    .then(() => hashPassword(password))
    .then((hashedPassword) => addNewUserQuery({ username, hashedPassword }))
    .then((dbRes) => res.json(dbRes))
    .catch((dbError) => res.json(`${dbError}`));
};

module.exports = { signUp };
