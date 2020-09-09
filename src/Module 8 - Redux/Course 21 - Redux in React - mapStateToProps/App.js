import React from 'react'
import {connect} from 'react-redux'

function App(props){
    return(
        <div>
            <h1>{props.count}</h1>
            <button>Decrement (-)</button>
            <button>Increment (+)</button>
        </div>
    )
}

function mapStateToProps(state){
    return{
        count: state
    }
}

export default connect(mapStateToProps, {}) (App)