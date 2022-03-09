const { connection } = require('../config/connection');

const addReciepesQuery = (title, detail, userId) => connection.query('INSERT INTO recipes (title, details, user_id) VALUES ($1,$2,$3) RETURNING *;', [title, detail, userId]);

module.exports = { addReciepesQuery };
