const express=require('express')
const router=express.Router();
const {getProfile,searchUser}=require('../controller/user.controller')

router.get('/getprofile',getProfile)
router.get('/search',searchUser)
module.exports=router