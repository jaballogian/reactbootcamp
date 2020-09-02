import React from 'react'
import GrandParent from './GrandParent'

class App extends React.Component{
    state = {
        count: 0
    }

    increment = () => {
        this.setState((previousState) => {
            return{
                count: previousState.count + 1
            }
        })
    }

    render(){
        console.log("[GP] [P] [C] [GC] App component just rendered")
        return(
            <div>
                <button onClick={this.increment}>Increment (+1)</button>
                <h2>{this.state.count}</h2>
                <h1>I'm the App component</h1>
                <GrandParent/>
                <GrandParent/>
            </div>
        )
    }
}

export default App