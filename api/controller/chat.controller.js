const errorHandler = require('../helper/error')
const chat = require('../models/chat.model')

const { emitEvent } = require('../helper/features')
const { ALERT, REFECTH_CHATS } = require('../helper/event')

async function newGroupChat(req, res, next) {
    try {
        const { name, members } = req.body
        if (members.length < 2) {
            next(errorHandler(404, "must have member more than 3"))
        }
        const allMembers = [...members, req.userId]
        await chat.create({
            name,
            groupchat: true,
            creator: req.userId,
            members: allMembers
        });
        emitEvent(req, ALERT, allMembers, `Welcome to ${name} chat`)
        emitEvent(req, REFECTH_CHATS, members)
        return res.status(201).json({
            scuess: true,
            message: "Group Chat Created",
        })

    } catch (error) {
        next(error)
    }

}

async function getMyChats(req, res, next) {
    
    const chats = await chat.find({ members: req.userId }).populate({
        path: 'members',
        select: 'username email image'
    });
   res.send(chats)
}
async function getMyGroups(req,res,next){
res.send("this route is working")
}
module.exports = { newGroupChat, getMyChats, getMyGroups };