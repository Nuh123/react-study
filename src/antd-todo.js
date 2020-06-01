import React, { Component } from 'react';
import {Input,Button,List} from 'antd'
import 'antd/dist/antd.css'
import store from './store'




class todolisst extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
    }
    render() { 
        return ( 
            <div>
                <div style={{marginLeft:'30px'}}>
                    <Input 
                    style={{width:'340px',marginRight:'15px'}}
                    placeholder='writing something'>
                    </Input>
                    <Button type='primary' >增加</Button>
                </div>
                <div style={{marginLeft:'30px',width:'340px'}}>
                    <List
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (<List.Item>{item}</List.Item>)}/>
                </div>
            </div>
        );
    }
}
 
export default todolisst;