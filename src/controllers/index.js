const { signUp } = require('./sign-up');
const { logIn } = require('./login');
const { loginHandle } = require('./loginHandle');
const { handleSignUp } = require('./handleSignUp');
const { addRecipes } = require('./addReciepes');
const { getRecipes } = require('./getRecipes');
const { pageNotFound, serverError } = require('./error');

module.exports = {
  signUp, logIn, loginHandle, handleSignUp, addRecipes, getRecipes, pageNotFound, serverError,
};
