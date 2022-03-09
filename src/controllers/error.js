const { join } = require('path');

const pageNotFound = (req, res, next) => {
  res.status(404).sendFile(join(__dirname, '..', '..', 'public', 'htmlPage', '404.html'));
};

const serverError = (err, req, res, next) => {
  res.status(500).sendFile(join(__dirname, '..', '..', 'public', 'htmlPage', '500.html'));
};

module.exports = { pageNotFound, serverError };
