// import history from '../history'
let INITIAL_STATE={isLoggedin:null}
export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
    case"SIGN_IN":
        return {...state,...action.payload,isLoggedin:true}
    case"SIGN_OUT":
        return {isLoggedin:false}
    default:
        return state
    }
}