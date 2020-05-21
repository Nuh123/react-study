import React,{Component} from 'react'

class App extends Component{
    render () {
        return (
            <div>
                Hello world
                {!true ? 123 : 321}
            </div>  
        )
    }
}

export default App