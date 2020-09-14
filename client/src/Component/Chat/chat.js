import React from 'react'
import { Input } from 'antd';
import 'emoji-mart/css/emoji-mart.css'
import {connect} from 'react-redux'
import { sendMessage } from '../../utils/chat';
// import React from 'react'
// import { Input } from 'antd';
// import 'emoji-mart/css/emoji-mart.css'
// import {connect} from 'react-redux'
// import { sendMessage } from '../../utils/chat';

const { Search } = Input;

class Chat extends React.Component{
    state={mess:''}
    onSend=e=>{
      e.preventDefault()
      sendMessage({roomId:this.props.room.roomId,message:this.state.mess,senderId:this.props.senderId,userName:this.props.userName})
      this.setState({mess:''})
    }
    render(){
        return<>
        {this.props.room && <Search style={{zIndex:0}}
        placeholder="input search text"
        enterButton="Send"
        size="large"
        value={this.state.mess}
        onChange={e=>this.setState({mess:e.target.value})}
        onSearch={value=>{sendMessage({roomId:this.props.room.roomId,message:this.state.mess,senderId:this.props.senderId,userName:this.props.userName});this.setState({mess:''})}}
      />}
      
      </>
    }
}
let mapStatesToProps=state=>{
  return {
    senderId:state.Auth.user._id,
    room:state.Chat1.chat,
    userName:state.Auth.user.facebook.userName
  }
}
export default connect(mapStatesToProps)(Chat)