import React, { Component } from 'react';
import propTypes from 'prop-types'

class todoItem extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentWillMount() {
        console.log('组件将要挂载')
    }
    componentDidMount() {
        console.log('组件将挂载over')
    }

    shouldComponentUpdate (nextprops, nextstate) {
        if (nextstate.content !== this.props.content){
            return true
        }else {
            return false
        }
    }
    componentWillUpdate() {

    }
    componentDidUpdate() {

    }
    // 这个传递父组件方法有点迷，主要是涉及到this不固定的问题。还有点迷糊
    render() { 
        console.log('组件渲染')
        return ( 
            <li onClick={this.props.delete.bind(this, this.props.index)}>
                {this.props.content}
                {this.props.selfIndex}
            </li>
         )
    }
}
todoItem.propTypes = {
    content: propTypes.string,
    index: propTypes.number,
    delete:propTypes.func.isRequired
}

todoItem.defaultProps = {
    selfIndex: 'selfIndex'

}
 
export default todoItem;