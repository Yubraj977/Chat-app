require('dotenv').config()
const jwt = require('jsonwebtoken')
const errorHandler = require('../helper/error')
const user = require('../models/user.model')

async function googlesignin(req, res, next) {
    const { username, email, image } = req.body;
    try {
        if (!username || !email || !image) {
            next(errorHandler(404, "all fields are required"))
        }
        const existingUser = await user.findOne({ email });
        console.log(existingUser);
        if (existingUser) {
            const token = jwt.sign({ id: existingUser._id, username: existingUser.username }, process.env.SECRET_KEY)
            res.cookie('access_token', token, {
                secure: true, // Set to true if served over HTTPS
                sameSite: 'None', // Required for cross-site requests
                httpOnly: true // For security reasons, set httpOnly to true
            }).status(200).json({ message: "Old user welcome" });
        }
        else {
            const newUser = new user({
                username,
                email,
                image
            });
            await newUser.save();
            const token = jwt.sign({ id: newUser._id, username: newUser.username }, process.env.SECRET_KEY)
            res.cookie('access_token', token, {
                secure: true, // Set to true if served over HTTPS
                sameSite: 'None', // Required for cross-site requests
                httpOnly: true // For security reasons, set httpOnly to true
            }).status(200).json({ message: "Sign in sucess new user" });
        }

    } catch (error) {
        next(error)

    }

}
async function logOut(req,res,next){
try {
    res.cookie('access_token', 'jindabad', {
        secure: true, 
        sameSite: 'None',
        httpOnly: true ,
        maxAge:0
    }).status(200).json({ message: "userLogout sucess" })
} catch (error) {
    next(error)
}
}
module.exports = { googlesignin,logOut }