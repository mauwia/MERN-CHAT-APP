import React from 'react'
import './Room.css'

import {connect} from 'react-redux'
// import {Row,Col} from 'antd'
import { Menu, Layout } from 'antd';
import { PieChartOutlined } from '@ant-design/icons';
import { Popconfirm, message } from 'antd';
import Searche from './Search';
import History from '../../History';
import {GetChat,LeaveRoom} from '../../Action'
import { Button } from 'antd'
import ViewMates from './ViewMates';
import { LeftRoom } from '../../utils/chat';
// import Chat from '../Chat/chat';
const {Header}=Layout
// const { SubMenu } = Menu



class Room extends React.Component{
  confirm=(e)=> {
    this.props.LeaveRoom(this.props.simChat._id);
    LeftRoom(this.props.simChat._id,this.props.user)
    message.success('You Left Room');
  }
  
   cancel=(e)=> {
    // console.log(this.props.user);
  }
    state = {
        theme: 'dark',
        current: History.location.pathname.slice(1),
      };
    
      
    
      handleClick = e => {
        // console.log(this.state)
        this.setState({
          current: History.location.pathname.slice(1),
        });
      };
      render() {
      //  if(!this.props.simChat)
      //   return<div>Loading</div>
        // console.log(this.props.simChat.chatAdmin._id,JSON.parse(localStorage._id))
        return (
          <div style={{position:'sticky',width:'100%'}}>
            {/* <Header className={'site-layout-background'} theme='light' style={{ padding: 0 }} /> */}
             <Header className={'site-layout-background'}>
      {/* <div className="logo" /> */}
            <Menu theme="light" mode="horizontal">
        <Menu.Item key="2"  style={{color:'#4b91ff'}}>{ `Room ID ${History.location.pathname.slice(1)?History.location.pathname.slice(1):'N/A'}`}</Menu.Item>
        {this.props.simChat && <Menu.Item  className='modified-item' style={{float:'right'}}><ViewMates/></Menu.Item>}
        {this.props.simChat && <Menu.Item  className='modified-item' style={{float:'right'}}> <Popconfirm theme='dark'
        title="Are You Sure To Leave Chat?"
        onConfirm={this.confirm}
        onCancel={this.cancel}
        okText="Yes"
        cancelText="No"
        ><Button type="primary" danger>Leave Room</Button></Popconfirm></Menu.Item>}
            {/* <Menu.Item  className='modified-item' style={{float:'right',position:'relative',top:'16px'}}><Searche/></Menu.Item> */}

            
          </Menu>
          </Header>
            {!this.props.chatHead && <Menu
              theme={'white'}
              // style={{position:'sticky',width:'100%'}}
              onClick={this.handleClick}
              style={{ width: 150,height:'100vh',position:'fixed'}}
              defaultOpenKeys={['sub1']}
              selectedKeys={[this.state.current]}
              mode="inline"
            ></Menu>
            }
           {this.props.chatHeads &&    <Menu
              theme={'white'}
              // style={{position:'sticky',width:'100%'}}
              onClick={this.handleClick}
              style={{ width: 150,height:'100vh',position:'fixed'}}
              defaultOpenKeys={['sub1']}
              selectedKeys={[this.state.current]}
              mode="inline"
            >
              {this.props.chatHeads.map(chatHead=>{
                return<Menu.Item key={chatHead.roomId} onClick={async()=>{History.push(`/${chatHead.roomId}`);this.props.GetChat(chatHead.roomId)}}>
                <PieChartOutlined  />
              <span>{chatHead.roomName}</span>
              </Menu.Item>
              })}
                
              
           
            </Menu>}
            
          </div>
        );
      }
}
let mapStateToProps=state=>{
  return{
      chatHeads:Object.values(state.Chat), 
      simChat:state.Chat1.chat,
      user:state.Auth.user._id
  }
}
export default connect(mapStateToProps,{GetChat,LeaveRoom})(Room)