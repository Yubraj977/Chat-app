const mongoose=require('mongoose')
const messageSchema=mongoose.Schema({
    socketId:{
        type:String
    },
    message:{
        type:String,
        required:true
    }
})
const message=mongoose.model('message',messageSchema)
module.exports=message