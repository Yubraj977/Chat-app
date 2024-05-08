require('dotenv').config()
const jwt = require('jsonwebtoken')
const errorHandler = require('../helper/error')

async function checkAuth(req, res, next) {
   
    try {
        if (req.cookies == null || req.cookies == {}) {
            next(errorHandler(404, "sorry, you are not authenticated"))
        }
        else {
            const { access_token } = req.cookies;
            const decoded = jwt.verify(access_token, process.env.SECRET_KEY)
            const { id } = decoded;
            req.userId = id;
            next()
        }

    } catch (error) {
        next(error)
    }


}
module.exports = checkAuth;