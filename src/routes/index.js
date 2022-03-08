const router = require('express').Router();
const { signUp, logIn } = require('../controllers');

router.post('/sign-up', signUp);
router.post('/log-in', logIn);

module.exports = router;
