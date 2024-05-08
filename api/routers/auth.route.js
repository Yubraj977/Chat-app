const express=require('express')
const {googlesignin,logOut}=require('../controller/auth.controller')
const router=express.Router()
router.post('/googlesignin',googlesignin)
router.get('/logout',logOut)
module.exports=router