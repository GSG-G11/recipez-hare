const { join } = require('path');

const loginHandle = (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'index.html'));
};

module.exports = { loginHandle };
