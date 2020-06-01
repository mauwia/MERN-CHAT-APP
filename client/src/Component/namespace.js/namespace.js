import React from 'react'
import Room from '../Room/Room'
import {Logout} from '../../Action'
import {Route} from 'react-router-dom'
import { Layout, Menu} from 'antd';
import {connect} from 'react-redux'
import {Row,Col} from 'antd'
import {
  UsergroupAddOutlined, 
  CommentOutlined,
  UserOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import './namespace.css'
import Chat from '../Chat/chat';
import CreateChat from './createChat';
import JoinChat from './JoinChat';
import LoginDash from '../LoginDashboard/loginDashboard';
import ChatRoom from '../Chat/chatRoom';

const { Header, Content,  Sider } = Layout;
// const { SubMenu } = Menu;

class NameSpace extends React.Component {
  state = {
    collapsed: true,
    visible: false,
    confirmLoading: false,
    visible1: false,
    confirmLoading1: false,
  };
  
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  showModal1 = () => {
    this.setState({
      visible1: true,
    });
  };
  handleOk = () => {
    this.setState({
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };
  handleOk1 = () => {
    this.setState({
      confirmLoading1: true,
    });
    setTimeout(() => {
      this.setState({
        visible1: false,
        confirmLoading1: false,
      });
    }, 2000);
  };

  handleCancel = () => {
  setTimeout(() => {
    this.setState({
      visible: false,
    });
  });
  };
  handleCancel1 = () => {
    setTimeout(() => {
      this.setState({
        visible1: false,
      });
    });
    };


  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };


  render() {
    // console.log(this.props)
    if(!this.props.auth)
    return<div>Loading</div>
    // console.log(this.props.auth.facebook.userName)
    return (
        <Layout style={{ height: '100vh'}} >
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{
        height: '100vh',
        }}>
            <div className="logo" />
            <Menu theme="dark"  mode="inline" defaultSelectedKeys='4'>
            <Menu.Item key="4" >
              
              <UserOutlined/>
            {/* <Avatar  icon={<UserOutlined />} /> */}
            <span>    {this.props.auth.facebook.userName}</span>
          </Menu.Item>
              <Menu.Item key="1" onClick={this.showModal}>
                <CommentOutlined/>
                <span>Create Chat</span>
                <CreateChat visible={this.state.visible}
                  handleOk={this.handleOk}
                  handleCancel={this.handleCancel}
                  confirmLoading={this.state.confirmLoading}
                  title={'Create Room'}
                />
              </Menu.Item>
              <Menu.Item key="2" onClick={this.showModal1}>
              <JoinChat 
              visible={this.state.visible1}
              handleOk={this.handleOk1}
              handleCancel={this.handleCancel1}
              confirmLoading={this.state.confirmLoading1}
              title={'Join Room'}
              />
                <UsergroupAddOutlined/>
                <span>Join Room</span>
              </Menu.Item>
              <Menu.Item key="3" onClick={()=>{this.props.Logout()}} >
                <LogoutOutlined/>
                <span>Logout</span>
              </Menu.Item>
               
             
            </Menu>
          </Sider>
          <Layout className="site-layout">
            {/* <Header theme='dark' style={{ padding: 0 }} /> */}
            <Header style={{zIndex:1}} >
             
      
          
          </Header>
            
            <Content style={{overflowY:'hidden'}}>
                <Row>
                  <Col span={24} style={{zIndex:1}}>
                <Room match={this.props.match.params.id} />
                </Col>
                  <Col span={24} style={{}} >
                    <Route path='/' exact render={(props)=>{return<LoginDash {...props}/>}}/>
                    <Route path='/:id' exact render={(props)=>{return<ChatRoom {...props}/>}} />
                  </Col>
                </Row>
            </Content>
                  <Row>
                    <Col span={24} offset={0} style={{zIndex:1}}>
                  <Chat />
                  </Col>
                  </Row>
                 
            {/* <Footer style={{ textAlign: 'center',zIndex:0 }}>Ant Design ©2018 Created by Ant UED</Footer> */}
          </Layout>
        </Layout>
      );
  }
}
let mapStateToProps=state=>{
  return{
    auth:state.Auth.user
  }
}

export default connect(mapStateToProps,{Logout})(NameSpace)