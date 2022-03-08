const router = require('express').Router();
const { signUp, logIn, loginHandle } = require('../controllers');

router.get('/log-in', loginHandle);
router.post('/sign-up', signUp);
router.post('/log-in', logIn);

module.exports = router;
