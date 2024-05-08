const mongoose=require('mongoose')
const chatSchema=new mongoose.Schema({
    name:{
        type:String
    },
    groupchat:{
        type:String
    },
    creators:{
        type:String,
        
    },
    members:{
        type:String
    }
})
const chat=mongoose.model('chat',chatSchema)
module.exports=chat;
