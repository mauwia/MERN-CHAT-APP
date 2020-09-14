import React from 'react'
import { Modal, Button } from 'antd';
import { List, Avatar } from 'antd';
import {connect} from 'react-redux'
class ViewMates extends React.Component{
    state = {
        loading: false,
        visible: false,
      };
      // state = {
      //   loading: false,
      //   visible: false,
      // };
      showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false, visible: false });
        }, 3000);
      };
    
      handleCancel = () => {
        this.setState({ visible: false });
      };
    
      render() {
        const { visible } = this.state;
        return (
          <div>
            <Button type="primary" onClick={this.showModal}>
              View Mates
            </Button>
            <Modal
              visible={visible}
              title="View Mates"
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={[
                <Button key="back" type='primary' onClick={this.handleCancel}>
                  Return
                </Button>,
                
              ]}
            >
             <List
              itemLayout="horizontal"
              dataSource={this.props.chat}
              renderItem={item => (
                <List.Item>
              <List.Item.Meta
              title={<a href="https://ant.design">{item.chatUserId.facebook.userName}</a>}
              description={item.chatUserId.email}
              avatar={<Avatar src={item.chatUserId.photo} style={{float:'right'}} />}
              />
          </List.Item>
            )}
          />
            </Modal>
          </div>
        );
      }
}
let mapStatesToProps=state=>{
  return{
    chat:state.Chat1.chat.chat_users
  }
}
export default connect(mapStatesToProps)(ViewMates)