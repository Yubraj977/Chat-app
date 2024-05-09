const express=require('express');
const router=express.Router();
const {newGroupChat,getMyChats,getMyGroups}=require('../controller/chat.controller')
router.post('/new',newGroupChat)
router.get('/getmychats',getMyChats)
router.get('/getmygroups',getMyChats)
module.exports=router