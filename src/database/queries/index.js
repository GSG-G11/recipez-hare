const { hasUsernameTakenQuery } = require('./hasUsernameTakenQuery');
const { addNewUserQuery } = require('./addNewUserQuery');
const { getUser } = require('./getUser');
const { addReciepesQuery } = require('./addReciepesQuery');
const { getAllRecipesQuery} = require('./getAllRecipesQuey');

module.exports = {
  hasUsernameTakenQuery, addNewUserQuery, getUser, addReciepesQuery,getAllRecipesQuery
};
