const { signUp } = require('./sign-up');
const { logIn } = require('./login');
const { loginHandle } = require('./loginHandle');
const { handleSignUp } = require('./handleSignUp');
const { addRecipes } = require('./addReciepes');
const { getRecipes } = require('./getRecipes');
const { pageNotFound, serverError } = require('./error');
const { logOut } = require('./logOut');
const { checkCookies } = require('./checkCookies');
const { handleUserPage } = require('./handleUserPage');

module.exports = {
  signUp,
  logIn,
  loginHandle,
  handleSignUp,
  addRecipes,
  getRecipes,
  pageNotFound,
  serverError,
  logOut,
  checkCookies,
  handleUserPage,
};
