import React from 'react'
import  {Col,Row} from 'antd'
import './loginDashboard.css'

class LoginDash extends React.Component{
    render(){
        return<Row className='landing1'>
            <Col offset={10} style={{position:'relative',top:'120px'}}>
                <h2 className='myText1'>My Chat App</h2>
                </Col>
                <Col span={12} offset={6} style={{position:'relative',bottom:'100px'}}>
                <p >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                
                </Col>
        </Row>
    }
}
export default LoginDash