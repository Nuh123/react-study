import React, { Component } from 'react';
class test extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                {this.props.them}
            </div>
        );
    }
}
 
export default test;