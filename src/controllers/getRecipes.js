const { getAllRecipesQuery } = require('../database/queries');

const getRecipes = (req, res) => {
  getAllRecipesQuery().then((data) => res.json(data.rows)).catch((err) => console.log(err));
};
module.exports = { getRecipes };
