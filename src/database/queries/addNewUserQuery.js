const { connection } = require('../config/connection');

const addNewUserQuery = ({ username, hashedPassword }) => connection.query('INSERT INTO users (username,password) VALUES ($1,$2) RETURNING *;', [username, hashedPassword])
  .catch(() => `${new Error('username has already taken, try another one')}`);

module.exports = { addNewUserQuery };
