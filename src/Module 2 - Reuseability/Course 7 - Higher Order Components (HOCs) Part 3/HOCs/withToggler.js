import React from 'react'

class Toggler extends React.Component{
    state = {
        on: this.props.defaultOnValue
    }

    toggle = () => {
        return(
            this.setState((previousState) => {
                return{
                    on: !previousState.on
                }
            })
        )
    }

    render(){
        const {component: C, defaultOnValue, ...props} = this.props
        return(
            <C on={this.state.on} toggle={this.toggle} {...props}/>
        )
    }
}

export function withToggler(inputComponent, inputOptionObject){
    return function(props){
        return(
            <Toggler
                component={inputComponent}
                defaultOnValue={inputOptionObject.defaultOnValue}
                {...props}/>
        )
    }
}