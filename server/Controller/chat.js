const Chats = require('../Model/chat')
exports.getAllRooms=async (req,res,next)=>{
    try{
        // console.log('hello',req.user._id)
        let userRooms=await Chats.find({"chat_users.chatUserId":req.user._id})
        return res.status(200).json({userRooms:userRooms})
    }
    catch(err){
        console.log(err)
    }
}
exports.getOneRoom=async(req,res,next)=>{
    try{
        const roomId=req.params.id
        // console.log(roomId)
        const chat=await Chats.findOne({"roomId":roomId}).populate('chatAdmin chat_users.chatUserId','_id facebook.userName email photo')
        // console.log(await Chats.findOne({"roomId":roomId}).populate('chatAdmin','_id facebook.userName'))
        // console.log(chat)
        return res.status(200).json({chat:chat})
    }
    catch(err){
        console.log(err)
    }
}