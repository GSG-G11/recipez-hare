const userRouter = require('express').Router();
const { join } = require('path');
const { jwtVerifyPromise } = require('../../utils');
const { addRecipes } = require('../../controllers');

userRouter.use((req, res, next) => {
  const token = req.cookies.info;
  jwtVerifyPromise(token)
    .then((decoded) => {
      console.log(decoded);
      req.userInfo = decoded;

      next();
    })
    .catch(() => console.log('err'));
});

userRouter.get('/', (req, res) => {
  console.log(req.userInfo);
  res.sendFile(join(__dirname, '..', '..', '..', 'public', 'htmlPage', 'reciepes.html'));
});

userRouter.post('/addReciepes', addRecipes);

module.exports = { userRouter };
