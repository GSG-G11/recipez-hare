const { connection } = require('../config/connection');

const signUpQuery = ({ username, hashedPassword }) => 

connection.query('SELECT * FROM users WHERE username=$1', [username])
  .then((dbRes) => {
    if (dbRes.rows.length === 0) {
      return connection.query('INSERT INTO users (username,password) VALUES ($1,$2) RETURNING *;', [username, hashedPassword]);
    }
    throw new Error();
  });

module.exports = { signUpQuery };
