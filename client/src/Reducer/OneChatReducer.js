export default (state={},action)=>{
    switch(action.type){
        case"ONE_ROOM":
            return{...state,...action.payload}
        case"LEAVE_ROOM":
            return{}
        case"NEW_MESSAGE":
            return{...state,chat:{...state.chat,messages:[...state.chat.messages,action.payload]}}
        default:
            return state
    }
}