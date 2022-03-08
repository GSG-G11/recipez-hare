const bcrypt = require('bcrypt');

const comparepassword = (password, hashPassword) => bcrypt.compare(password, hashPassword);
module.exports = { comparepassword };
