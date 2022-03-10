const { join } = require('path');

const handleUserPage = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'htmlPage', 'reciepes.html'));
};
module.exports = { handleUserPage };
