import React from 'react'

import {connect}  from 'react-redux'
import { Modal, Input } from 'antd';
import { socketCall } from '../../utils/chat';

class CreateChat extends React.Component {
  state={
    value:''
  }
  handleOk=()=>{

    socketCall({roomName:this.state.value,createrId:this.props.auth})
    this.props.handleOk()
  }
  render() {
    // const { visible, confirmLoading, ModalText } = this.state;
    // console.log(this.props.auth)
    return (
      <div>
        
        <Modal
          title={this.props.title}
          visible={this.props.visible}
          onOk={this.handleOk}
          confirmLoading={this.props.confirmLoading}
          onCancel={this.props.handleCancel}
          
        >
            <h4>Enter Room Name</h4>
          <Input placeholder={'Room Name'} value={this.state.value} onChange={(e)=>{this.setState({value:e.target.value})}}/>
            <p>{this.props.ModalText}</p>
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
export default connect(mapStateToProps)(CreateChat)