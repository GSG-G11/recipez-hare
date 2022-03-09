const router = require('express').Router();
const { signUp, logIn, loginHandle } = require('../controllers');
const { userRouter } = require('./user');

router.get('/log-in', loginHandle);
router.post('/sign-up', signUp);
router.post('/log-in', logIn);
router.use('/user', userRouter);

module.exports = router;
