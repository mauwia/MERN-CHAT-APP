import {combineReducers} from 'redux'
import authReducer from './authReducer'
import chatReducer from './chatReducer'
import OneChatReducer from './OneChatReducer'

export default combineReducers({
    Auth:authReducer,
    Chat:chatReducer,
    Chat1:OneChatReducer,
})