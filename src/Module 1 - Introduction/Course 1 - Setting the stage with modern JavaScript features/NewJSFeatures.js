import React, {Component} from 'react'

class NewJSFeatures extends Component{
    
    state = {
        count: 0,
        name: "Jabal Logian",
        greeting: "Good night"
    }

    increment = () => {
        console.log("Increment button is clicked")
        return(
            this.setState((previousState) => {
                return{
                    count: previousState.count + 1
                }
            })
        )
    }

    decrement = () => {
        console.log("Decrement button is clicked")
        return(
            this.setState((previousState) => {
                return{
                    count: previousState.count - 1
                }
            })
        )
    }

    render(){
        const {count, name, greeting} = this.state
        return(
            <div>
                <h1>{greeting} {name}, Let's count! {count}</h1>
                <button onClick={this.increment}>Increment (+)</button>
                <button onClick={this.decrement}>Decrement (-)</button>
            </div>
        )
    }
}

export default NewJSFeatures