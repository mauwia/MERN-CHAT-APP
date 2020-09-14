import React from 'react'
import {connect} from 'react-redux'

import { Modal, Input } from 'antd';
import { joinRoom } from '../../utils/chat';

class JoinChat extends React.Component {
  state={
    value:''
  }
  handleOk=()=>{

    joinRoom({roomName:this.state.value,joinerId:this.props.auth})
    this.props.handleOk()
  }
  render() {
    return (
      <div>
        
        <Modal
          title={this.props.title}
          visible={this.props.visible}
          onOk={this.handleOk}
          confirmLoading={this.props.confirmLoading}
          onCancel={this.props.handleCancel}
          
        >
            <h4>Enter Room Id</h4>
          <Input placeholder={'Room Id'} value={this.state.value} onChange={(e)=>{this.setState({value:e.target.value})}}/>
        
        </Modal>
      </div>
    );
  }
}
let mapStateToProps=state=>{
  return{
    auth:state.Auth.user._id
  }
}
export default connect(mapStateToProps)(JoinChat)