const router = require('express').Router();
const {
  signUp, logIn, loginHandle, handleSignUp, pageNotFound, serverError,
} = require('../controllers');
const { userRouter } = require('./user');

router.get('/sign-up', handleSignUp);
router.get('/log-in', loginHandle);
router.post('/sign-up', signUp);
router.post('/log-in', logIn);
router.use('/user', userRouter);

router.use(pageNotFound);
router.use(serverError);

module.exports = router;
