const mongoose = require('mongoose')
const { Types } = require('mongoose')
const user= require('./user.model') 
const requestSchema = mongoose.Schema({
    status:{
        type:String,
        deafult:"pending",
        enum:["pending,accepted,rejected"]
    },
    sender: {
        type: Types.ObjectId,
        ref: "user"
    },
    receiver:{
        type:Types.ObjectId,
        ref:"user"
    }
}, { timestamps: true })

const request=mongoose.model('request',requestSchema)
module.exports=request