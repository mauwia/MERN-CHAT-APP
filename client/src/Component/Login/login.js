import React from 'react'
import FacebookLogin from 'react-facebook-login'
// import {FacebookFilled} from '@ant-design/icons'

import './login.css'
import {Col,Row,Card} from 'antd'
import { connect } from 'react-redux'
import {SignIn} from '../../Action'
// const {Title}=Typography
class Login extends  React.Component{
    render(){
        return <div className='landing'>
            <Row>
                <Col span={12} offset={6}>
            <Card  className='myCard' >
                <Row><Col offset={8}>
                <h2 className='myText'>My Chat App</h2></Col>
                <p >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <Col offset={8}>
                <FacebookLogin
                appId={1220644514993929}
                fields='name,picture,email'
                autoLoad={false}
                callback={async(res)=>await this.props.SignIn(res)}
                cssClass={'myButton'}
                /></Col>
                </Row>
                </Card>
    </Col>
    </Row>
        </div>
    }
}
export default connect(null,{SignIn})(Login)