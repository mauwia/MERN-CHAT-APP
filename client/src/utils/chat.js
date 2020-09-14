import io from 'socket.io-client'
let socket
if(localStorage.token){
    let data=JSON.parse(localStorage.getItem('_id'))
    socket=io('http://localhost:8000/',{query:'user_id='+data})
}
export const socketCall=(roomName)=>{

    socket.emit('createRoom',roomName)
}
export const getCreatedRoom=(cb,notifi)=>{
    socket.on('roomSave',room=>{cb(room);notifi('Room Created','success')})
}
export const joinRoom=(roomDetail)=>{
    
    socket.emit('joinRoom',roomDetail)
}
export const exception=cb=>{
    socket.on('exception',data=>cb(data,'warning'))
}
export const getJoinRoom=(cb)=>{
    // console.log('wor')
    socket.on('getJoinRoom',data=>cb(data))
}
export const LeftRoom=(id,user_id)=>{
    socket.emit('leftRoom',{room:id,user_id})
}
export const sendMessage=(data)=>{
    socket.emit('sendMessages',data)
}
export const  OutMessage=(cb)=>{
    socket.on('messageOut',data=>cb(data))
}