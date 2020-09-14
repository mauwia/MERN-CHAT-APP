import React from 'react'
import {Col,Row, Avatar} from 'antd'
import './message.css'
class IncMessage extends React.Component{
    render(){
        // console.log(this.props.match.params.id)
    return<Col  span={5} offset={13} pull={12}  style={{marginTop:10}}>
        <Row>
                <Col className='incomingmessage' span={24}>
                    <h6 style={{color:'white'}}>{this.props.name}</h6>
                    {this.props.message}
                </Col>
            </Row>
    </Col>

    }
}
export default IncMessage