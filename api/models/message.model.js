const mongoose = require('mongoose')
const { Types } = require('mongoose')
const user = require('./user.model')
const chat = require('./chat.model')
const messageSchema = mongoose.Schema({
    content: String,
    attachments:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true,
            }
        }
    ],
    sender: {
        type: Types.ObjectId,
        ref: "user"
    },
    chat: {
        type: Types.ObjectId,
        ref: "chat",
        required: true
    }
}, { timestamps: true })
const message=mongoose.model('message',messageSchema)