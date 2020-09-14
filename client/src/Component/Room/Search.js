import React from 'react'
import { Input } from 'antd';

const { Search } = Input;
// const { Search } = Input;

class Searche extends React.Component{
    render(){
        return <Search placeholder="input search text"  enterButton />
        
    }
}

export default Searche