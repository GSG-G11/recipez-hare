const { connection } = require('../config/connection');

const getAllRecipesQuery = () => connection.query('SELECT r.id,r.title,r.details,r.user_id,u.username FROM recipes AS r JOIN users AS u ON (u.id=r.user_id) ');
module.exports = { getAllRecipesQuery };
