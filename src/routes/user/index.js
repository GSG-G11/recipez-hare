const userRouter = require('express').Router();

const {
  addRecipes, getRecipes, logOut, checkCookies, handleUserPage,
} = require('../../controllers');

userRouter.use(checkCookies);

userRouter.get('/', handleUserPage);

userRouter.post('/addReciepes', addRecipes);

userRouter.get('/getRecipes', getRecipes);
userRouter.get('/log-out', logOut);

module.exports = { userRouter };
