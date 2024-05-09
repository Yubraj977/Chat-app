const mongoose=require('mongoose')
const {Types}=require('mongoose')
const user=require('./user.model')
const chatSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    groupchat:{
        type:Boolean,
        default:false
    },
    creator:{
        type:Types.ObjectId,
        ref:"user"
        
    },
   members:[
    {
        type:Types.ObjectId,
        ref:"user"
    }
   ]
})
const chat=mongoose.model('chat',chatSchema)
module.exports=chat;
