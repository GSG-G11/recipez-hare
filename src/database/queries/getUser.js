const { connection } = require('../config/connection');

const getUser = (username) => connection.query('SELECT * FROM users WHERE  username =$1', [username]);
module.exports = { getUser };
