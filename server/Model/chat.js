const mongoose=require('mongoose')

const chatUserSchema=mongoose.Schema(
    {
        chatUserId:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true}
    }
)
const messageSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    createdAT:{type:String,default:Date(Date.now()),required:true},
    text:{type:String,required:true},
    userName:{type:String},
    sender:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true}
})
const chatRoomSchema=mongoose.Schema({
    chatAdmin:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    roomId:{type: mongoose.Schema.Types.ObjectId,unique: true ,required: true},
    chat_users:[chatUserSchema],
    chat_type:{
        type: String,
        enum: ['single','private','group'],
        required: true
    },
    roomName:{type:String},
    startedAt:{type: String,default: Date(Date.now()) },
    lastUpdated: {type: String,default: Date(Date.now()) },
    lastMessage: {type: String },
    messages:[messageSchema]
})
module.exports=mongoose.model('Chat',chatRoomSchema)