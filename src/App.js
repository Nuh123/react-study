import React,{Component} from 'react'
import Item from './todoItem'

class App extends Component{
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
        console.log(index)
        let list = this.state.itemList
        list.splice(index,1)
        this.setState({
            itemList: list
        })
    }
    changeInput (e) {
        //console.log(e.target.value)
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
                        this.state.itemList.map((item,index) => {
                            return <Item content= {item} key= {index} delete = {this.deleteItem.bind(this)} index = {index} />
                        })   
                    }
                </ul>
            </div>
        )
    }
}

export default App