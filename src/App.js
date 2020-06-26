import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import './index.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            comments:[]
        }
    }
    render() { 
        return ( 
            <div className='wrapper'>
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        );
    }
    handleSubmitComment (comment) {
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        this.state.comments.push(comment)
        this.setState({
          comments: this.state.comments
        })
    }
}
 
export default App;