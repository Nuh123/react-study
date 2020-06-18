import React, { Component } from 'react';
import Test from './test';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            content: 'test',
            stateData: {
                themeColor: 'red',
                themeName: 'redTheme'
            }
         }
    }
    render() { 
        return ( 
            <div >
                {/* <div dangerouslySetInnerHTML={{__html:this.state.content}}> */}
                app组件
                react小书初始化
                <Test them = {this.state.content}/>
            </div>
        );
    }
}
 
export default App;