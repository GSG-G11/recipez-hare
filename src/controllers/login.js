const jwt = require('jsonwebtoken')
const { jwtSignPromise } = require('../utils')

const { logInValidation } = require('../validation/loginValidation')
const logIn = (req, res) => {
    const { username, password } = req.body;
    logInValidation(req.body)
        .then(data => getUser(username))
        .then(response => {
            if (response.rows.length === 0) {
                res.json({ message: 'wrong user name or wrong password' })
            }
            else {
                return response.rows[0]
            }
        })
        .then(userInfo => comparepassword(password, userInfo.password))
        .then(result => {
            if (result) {
                jwtSignPromise(username)
                .then(token => res.cookie('info', token).redirect('/home'))
                .catch(err => res.json({message:"error"}))


            }
            else {
                res.json({ message: 'wrong user name or wrong password' })
            }
        })
        .catch({mes})

}
module.exports = { logIn };