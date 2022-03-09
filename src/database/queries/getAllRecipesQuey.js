const {connection} = require('../config/connection');

const getAllRecipesQuery = () => connection.query('SELECT * FROM recipes ');
module.exports = { getAllRecipesQuery };


