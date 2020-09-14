import React from 'react'
import {Col, Row,Avatar} from 'antd'
import './message.css'
class OutMessage extends React.Component{
    render(){
        // for outgoing message
        return<Col  span={6} offset={15} push={2}   style={{marginTop:10}}>
            <Row>
                
                <Col className='outgoingmessage' span={24} >
                    {this.props.message}
                </Col>
            </Row>
        </Col>

    }
}
export default OutMessage