const errorHandler = require('../helper/error')
const chat = require('../models/chat.model')
const user = require('../models/user.model')
const message=require('../models/message.model')
const { emitEvent } = require('../helper/features')
const { ALERT, REFECTH_CHATS,NEW_MESSAGE_ALERT,NEW_ATTACHMENTS } = require('../helper/event')


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

    try {
        const chats = await chat.find({ members: req.userId }).populate({
            path: 'members',
            select: 'username email image'
        });
        console.log(chats);
        const myTransformChats = chats.map((chat) => {
            const othermember = chat.members.filter((eachmember) => eachmember._id.toString() !== req.userId.toString())
            return {
                _id: chat._id,
                groupchat: chat.groupchat,

                avtar: chat.groupchat ?
                    chat.members.slice(0, 3).map((eachmember) => eachmember.image)
                    : othermember.image,


                name: chat.groupchat
                    ? chat.name
                    : othermember.usernmae,
                creator: chat.creator,

                members: chat.members.filter((eachmember) => eachmember._id.toString() !== req.userId.toString()).map((eachmember) => eachmember._id),

            }
        })
        res.status(200).json({
            sucess: true,
            myTransformChats

        })
    } catch (error) {
        next(error)
    }
}
async function getMyGroups(req, res, next) {
    try {
        myCreatedGroups = await chat.find({
            creator: req.userId
        }).populate({
            path: 'members',
            select: 'username email image'
        })
        res.status(200).json({
            sucess: true,
            myCreatedGroups
        })
    } catch (error) {
        next(error)
    }


}
async function addMembers(req, res, next) {
    try {

        const { chatId, members } = req.body;
        const validChat = await chat.findById(chatId);

        if (!validChat) {
            next(errorHandler(404, "chat Not found"))
        }
        if (!validChat.groupchat) {
            next(errorHandler(404, "This is not the valid group chat"))
        }

        if (validChat.creator.toString() !== req.userId.toString()) {
            next(errorHandler(403, "You are not allowded to do this"))
        }

        const allNewMembersPromise = members.map((i) => user.findById(i));
        const allNewMembers = await Promise.all(allNewMembersPromise)
        const newMembersName = allNewMembers.map((eachmember) => eachmember.username).join("")



        const uniquieMembers = allNewMembers.filter((i) => !validChat.members.includes(i._id.toString()))

        validChat.members.push(...uniquieMembers);



        await validChat.save();

        emitEvent(req, ALERT, chat.members, `${newMembersName} added to the group`)
        res.status(200).json({
            sucess: true,
            message: "members added sucess",
            validChat
        })
    } catch (error) {
        next(error)
    }


}

async function removeMembers(req, res, next) {
    const { chatId, deleteUserId } = req.body;
    const [validChat, userThatWillRemoved] = await Promise.all([
        chat.findById(chatId),
        user.findById(deleteUserId)
    ])


    if (!validChat) {
        next(errorHandler(404, "chat Not found"))
    }
    if (!validChat.groupchat) {
        next(errorHandler(404, "This is not the valid group chat"))
    }

    if (validChat.creator.toString() !== req.userId.toString()) {
        next(errorHandler(403, "You are not allowded to do this"))
    }
    validChat.members = validChat.members.filter((eachmember) => eachmember.toString() !== deleteUserId.toString());
    await validChat.save()

    emitEvent(req, ALERT, chat.members, `${userThatWillRemoved.username} lai group bata vagieako xa`)
    emitEvent(req, REFECTH_CHATS, chat.members)
    return res.status(200).json({
        sucess: true,
        message: "removing memeber is sucess"
    })
}
async function leaveGroup(req, res, next) {

    try {
        const chatId = req.params.id
        const validChat = await chat.findById(chatId)
        // res.send(validChat)
        if (!validChat) {
            next(errorHandler(403, "Chat Id you provided is not valid not found in the database"))
        }
        const remaningMembers = validChat.members.filter((eachmember) => eachmember.toString() !== req.userId.toString())
        if (req.userId.toString() == validChat.creator.toString()) {
            validChat.creator = remaningMembers[0]

        }
        validChat.members = remaningMembers
        const leavingMan = await user.findById(req.userId)
        validChat.save()
        emitEvent(req, ALERT, chat.members, `${leavingMan.username} vageo Chat xodera`)
        res.status(200).json({
            sucess: true,
            message: 'leaving group sucess'
        })

    } catch (error) {
        next(errorHandler(error))
    }


}
async function sendAttachments(req, res, next) {

    try {
        const { chatId } = req.body;
        const validChat = await chat.findById(chatId)
        const me = await user.findById(req.userId)
        if (!validChat) {
            return next(errorHandler(403, "the chat is not avilavle"))
        }
        // console.log(req.files);
        const files=req.files || []
        // if(files.length<1){
        //     return next(errorHandler(404,"please provide files"))

        // }
       // Upload Files Here
       const attachments=["one","two","three","four","five"]
       const messageForRealTime={
        content:"",
        attachments,
        sender:{
            id:me._id,
            username:me.username
        },
        chat:chatId,
       };
       const messageForDb={content:'', attachments, sender:me,chat:chatId}
       const myMessage=message.create(messageForDb)
    emitEvent(req,NEW_ATTACHMENTS,validChat.members,{
        message:messageForRealTime,
        chatId
    })
    emitEvent(req,NEW_MESSAGE_ALERT,validChat.members,{chatId})
    res.status(200).json({
        sucess:true, 
        message:myMessage
    })
    } catch (error) {
        next(error)
    }

}

//Send Attachments
// Get messages
//get chat details,rename , delete

module.exports = { newGroupChat, getMyChats, getMyGroups, addMembers, removeMembers, leaveGroup, sendAttachments };