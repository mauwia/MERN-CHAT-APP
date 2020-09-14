import {onSuccess,getDetails} from '../Api/AuthApi'
import {getAllRooms, getOneRooms} from '../Api/chatApi'
import History from '../History'
export const SignIn=(response)=>async dispatch=> {
    let data=await onSuccess(response)
    console.log(data)
    History.push('/')
    dispatch({type:'SIGN_IN',payload:data})
}
export const Logout=()=>async dispatch=>{
    localStorage.clear()
    History.push('/login')
    dispatch({type:'SIGN_OUT'})
}
export const GetDetails=()=>async dispatch=>{
    let data=await getDetails()
    dispatch({type:'SIGN_IN',payload:data})
}
export const GetAllRooms=()=>async dispatch=>{
    // console.log('hellp')
    let data =await getAllRooms()
    dispatch({type:"GET_ALL_CHATS",payload:data})
}
export const GetNewChat=(newRoom)=>async dispatch=>{
    dispatch({type:"NEW_ROOM",payload:newRoom})
}
export const GetChat=(id)=>async dispatch=>{
    let data=await getOneRooms(id)
    // console.log(data)
    dispatch({type:'ONE_ROOM',payload:data})
}
export const LeaveRoom=(id)=>async dispatch=>{
    // console.log(id)
    dispatch({type:'LEAVE_ROOM',payload:id})
    History.push('/')
}
export const SendMessage=data=>async dispatch=>{
    dispatch({type:"NEW_MESSAGE",payload:data})
}