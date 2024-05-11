const express = require('express');
const router = express.Router();
const {attachmentsMulter}=require('../middlewares/multer')
const { newGroupChat,
        getMyChats,
        getMyGroups,
        addMembers,
        removeMembers,
        leaveGroup,
        sendAttachments
    } = require('../controller/chat.controller')
router.post('/new', newGroupChat)
router.get('/getmychats', getMyChats)
router.get('/getmygroups', getMyGroups)
router.put('/group/addmembers', addMembers)
router.delete('/group/removemembers', removeMembers)
router.delete('/group/leave/:id',leaveGroup)
router.post('/message',attachmentsMulter,sendAttachments)

module.exports = router