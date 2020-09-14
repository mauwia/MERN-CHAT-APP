let io,socket
const mongoose=require('mongoose')
const Chat=require('../Model/chat')
const createRoom=async(roomName,user_id)=>{
  
   try{
      const newChat=new Chat({
         chatAdmin:roomName.createrId,
         roomId:mongoose.Types.ObjectId(),
         chat_users:[{chatUserId:roomName.createrId}],
         chat_type:"private",
         roomName:roomName.roomName
      })
      const room=await newChat.save()
      socket.emit('roomSave',room)
   }
   catch(err){
      console.log(err)
   }
}
const joinRoom=async(room,roomDetail)=>{
   try{
      let flag=0
      room.chat_users.map(user=>{
         if(user.chatUserId==roomDetail.joinerId)
         {
            flag=1
         }
      })
      if (flag){
         socket.emit('exception','User Already In Chat')
      }
      else{
         await room.chat_users.push({chatUserId:roomDetail.joinerId})
         await room.save()
         socket.emit('getJoinRoom',room)
      }   
}
   catch(err){
      console.log(err)
   }
}
const LeftRoom = async (id)=>{
   try{
   user_id = id.user_id
   let room = await Chat.findOne({"_id":id.room})
   room.chat_users=room.chat_users.filter(chat_user=>chat_user.chatUserId!=user_id)
   // console.log(room)
   room.save()
   
   
   }
   catch(err){
      console.log(err)
   }
}
const joinRooms=async (socket,user_id)=>{
   try{
      let userRooms=await Chat.find({'chat_users.chatUserId':user_id}).select('roomId')
      rooms=userRooms.map(room=>room.roomId)
      console.log(rooms[0])
      socket.join(rooms)
      // io.of('/').in(rooms).client((err,cli)=>console.log(cl))
      console.log("userID: ",user_id," joined rooms using socketID: ",socket.id)
   }catch(err){
      socket.emit('exception',"No Room Exist")
   }
}
const findRoom =async(roomDetail)=>{
   try{
      let room=await Chat.findOne({"roomId":roomDetail.roomName})
      // console.log(room)
      joinRoom(room,roomDetail)
      }
      
   catch(err){
      // console.log(err)
      socket.emit('exception',"Room Doesn't Exist")
   }
}
const leaveUserRooms=async(socket,userId)=>{
   // const userId=data.userId
   
   try {
       const userRooms=await Chat.find({"chat_users.chatUserId": userId}).select('roomId')
       const rooms=userRooms.map(room=> room.roomId)
       socket.leave(rooms)
   } catch (error) {
       console.log(error)
   }
}
const sendMessage=async data=>{
   const roomId=data.roomId
   const userName=data.userName
   const message=data.message
   const senderId=data.senderId
   if(message===''){
      socket.emit('exception',"Can't Send Empty Message")
   }
   // console.log(roomId,message,senderId)
   else{
   io.to(roomId).emit('messageOut',{roomId,message,senderId,userName})
   // try{
   //    const room=await Chat.findOne({'roomId':roomId})
   //    room.lastUpdated=Date(Date.now())
   //    await room.message.push({
   //       _id:mongoose.Types.ObjectId(),
   //       userName:userName,
   //       sender:senderId,
   //       text:message
   //    })
   //    await room.save()
   // }
   // catch(err){
   //    console.log(err)
   // }
}
}

const socketIO=async(ioServer,socketServer)=>{
   io=ioServer
   socket=socketServer
   let user_id=socket.request._query.user_id
   // console.log(user_id)
   await joinRooms(socket,user_id)
   socket.on('disconnect',()=>{
      leaveUserRooms(socket,user_id)
  })
   socket.on('sendMessages',sendMessage)
   socket.on('createRoom',(roomNam)=>createRoom(roomNam,user_id))
   socket.on('joinRoom',(roomDetail)=>findRoom(roomDetail))
   socket.on('leftRoom',(id)=>LeftRoom(id))
}
module.exports=socketIO