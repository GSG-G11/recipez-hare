const { connection } = require('../config/connection');

const hasUsernameTakenQuery = ({ username }) => connection.query('SELECT * FROM users WHERE username=$1', [username])
  .then((dbRes) => {
    if (dbRes.rows.length !== 0) throw new Error('username has already taken, try another one');
  });

module.exports = { hasUsernameTakenQuery };
