const { signUp } = require('./sign-up');
const { logIn } = require('./login');
const { loginHandle } = require('./loginHandle');
const { handleSignUp } = require('./handleSignUp');
const { addRecipes } = require('./addReciepes');

module.exports = {
  signUp, logIn, loginHandle, handleSignUp, addRecipes,
};
