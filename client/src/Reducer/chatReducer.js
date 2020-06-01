import _ from 'lodash'
export default (state={},action)=>{
    switch(action.type){
        case"GET_ALL_CHATS":
            return{...state,..._.mapKeys(action.payload.userRooms,'_id')}
        case"NEW_ROOM":
            // return{...state,userRooms:[...state.userRooms,action.payload]}
            return {...state,[action.payload._id]:action.payload}
        case "LEAVE_ROOM":
            console.log(action.payload)
            return _.omit(state,action.payload)
        default:
            return state
    }
}