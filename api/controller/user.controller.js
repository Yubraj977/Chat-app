const user = require('../models/user.model')
async function getProfile(req, res) {
    try {
        const userId = req.userId
        const validUser = await user.findById(userId)
        res.status(200).json({
            status: "sucess",
            validUser
        })
    } catch (error) {
        next(error)
    }


}

async function searchUser(req,res,next){
    try {
        const userEmail=req.query.email;
        
        const validUser=await user.find({email:req.query.email})
        console.log(validUser);
    } catch (error) {
        next(error)
    }
   
}
module.exports = { getProfile,searchUser }