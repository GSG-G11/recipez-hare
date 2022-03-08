const { hashPassword } = require('./hashPassword');
const {comparepassword}= require('./comparepassword')
const {jwtSginPromise}=require('./jwtSignPromise')

module.exports = { hashPassword,jwtSginPromise };
