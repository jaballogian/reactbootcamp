import React from 'react'
import {connect} from 'react-redux'
import {increment, decrement} from './Redux/index'

function App(props){
    return(
        <div>
            <h1>{props.count}</h1>
            <button onClick={props.decrement}>Decrement (-)</button>
            <button onClick={props.increment}>Increment (+)</button>
        </div>
    )
}

function mapStateToProps(state){
    return{
        count: state
    }
}

const mapDispatchToProps = {
    increment: increment,
    decrement: decrement
}

export default connect(mapStateToProps, mapDispatchToProps) (App)