const logOut = (req, res) => {
  res.clearCookie('info').redirect('/');
};
module.exports = { logOut };
