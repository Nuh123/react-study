
import React, {Component} from 'react'

class todo extends Component {
    constructor (props) {
        super(props)
        this.state = {
            inputVal: '第项',
            itemList: ['第一项', '第二项']
        }
    }
    
    addItem = (e) => {
        // 箭头函数模式获得this
        this.setState({
            itemList: [...this.state.itemList,this.state.inputVal],
            inputVal: ''
        })
    }
    deleteItem (index) {
        // bind模式获得this
        // console.log(index)
        let list = this.state.itemList
        list.splice(index,1)
        this.setState({
            itemList: list
        })
    }
    changeInput (e) {
        // console.log(e.target.value)
        this.setState({
            inputVal:e.target.value
        })
    }
    render () {
        return (
            <div>
                <input value={this.state.inputVal} onChange={this.changeInput.bind(this)}/>
                <button onClick={this.addItem}>添加</button>
                <ul>
                    {
                        // 直接放数组jsx会自己遍历，但没有dom，是string。
                        // this.state.itemList  
                    this.state.itemList.map((item,index) => {
                        // 一行return模式，复杂情况下不直观。
                        // return <li key= {index} onClick = {this.deleteItem.bind(this,index)}>{item}</li>
                        // return 复杂情况可加括号，es6入门箭头函数部分有介绍
                        return (
                            <li key= {index} 
                                // onClick = {this.deleteItem.bind(this,index)}>
                                // 箭头函数模式获取this的传参
                                onClick = {()=> this.deleteItem(index)}>
                                {item}
                            </li>
                        )

                           
                    })
                    }
                </ul>
            </div>
            )
    }
    
}
export default todo