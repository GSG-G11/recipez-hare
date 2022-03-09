const { join } = require('path');

const handleSignUp = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'htmlPage', 'signUp.html'));
};

module.exports = { handleSignUp };
