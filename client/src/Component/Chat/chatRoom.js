import React from 'react'
import  {Row,Col, message} from 'antd'
import {connect} from 'react-redux'
import {GetChat} from '../../Action'
import '../LoginDashboard/loginDashboard.css'
import Messageob from './messageob'
import OutMessage from './OutGoingMess'
import IncMessage from './IncomingMess'


class ChatRoom extends React.Component{
    componentDidMount(){
        this.props.GetChat(this.props.match.params.id)
        // console.log(this.props.match.params.id)
    }
    render(){
        return<>{this.props.room && <Row className='landing2'>
                <Col offset={3}>
                    {this.props.room.messages.length===0 && <Row>
                        Send A Message
                        </Row>}
                    { this.props.room.messages && <Row>
                       {
                         this.props.room.messages.map(messs=>{
                             if(this.props.senderId===messs.senderId)
                             return<OutMessage message={messs.message}/>
                             else
                                return<IncMessage message={messs.message} name={messs.userName}/>
                            })
                       }
                    </Row>}
                    
                    </Col>
               
        </Row>
    }</>
    }
}
let mapStateToProps=state=>{
    return{
    senderId:state.Auth.user._id,
    room:state.Chat1.chat,
    }
}
export default connect(mapStateToProps,{GetChat})(ChatRoom)