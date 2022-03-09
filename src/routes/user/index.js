const userRouter = require('express').Router();
const { join } = require('path');
const { jwtVerifyPromise } = require('../../utils');
const { addRecipes,getRecipes } = require('../../controllers');

userRouter.use((req, res, next) => {
  const token = req.cookies.info;
  jwtVerifyPromise(token)
    .then((decoded) => {
      console.log(decoded);
      req.userInfo = decoded;

      next();
    })
    .catch(() => res.json('err'));
});

userRouter.get('/', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', '..', 'public', 'htmlPage', 'reciepes.html'));
});

userRouter.post('/addReciepes', addRecipes);

userRouter.get('/getRecipes', getRecipes);

module.exports = { userRouter };
