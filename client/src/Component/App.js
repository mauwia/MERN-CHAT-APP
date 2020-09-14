import React from 'react';
import 'antd/dist/antd.css';
import {Route} from 'react-router-dom'

import {GetDetails,GetAllRooms,GetNewChat,SendMessage} from '../Action'
import NameSpace from './namespace.js/namespace';
import Login from './Login/login'
import {  notification } from 'antd';

import { connect } from 'react-redux';
import { getCreatedRoom,exception, getJoinRoom, OutMessage } from '../utils/chat';
class App extends React.Component{
    componentDidMount(){
        if(localStorage.token){
        getCreatedRoom(this.props.GetNewChat,this.openNotificationWithIcon)
        exception(this.openNotificationWithIcon)
        getJoinRoom(this.props.GetNewChat)
        OutMessage(this.props.SendMessage)
        this.props.GetDetails()
        this.props.GetAllRooms()}
    }
    openNotificationWithIcon = (mess,type) => {
        notification[type]({
          message: mess,
        });
      };
    
    render(){
        return<div>
            {<Route exact path='/login' render={(props)=>{return<Login {...props}/>}} />}
            {<Route exact path='/' render={(props)=>{return<NameSpace {...props}/>}} />}
            {<Route exact path='/:id' render={(props)=>{return<NameSpace {...props}/>}} />}

            {/* {<Route exact path='/sa' render={()=>{return <div>hell</div>}} />} */}
            
        </div>
    }
}

export default connect(null,{GetDetails,GetAllRooms,GetNewChat,SendMessage})(App)