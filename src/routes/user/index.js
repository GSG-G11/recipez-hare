const userRouter = require('express').Router();
const { jwtVerifyPromise } = require('../../utils');

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
  res.send(req.userInfo);
  // res.send('user');
});

userRouter.post('/reciepes', addRecipes);

module.exports = { userRouter };
