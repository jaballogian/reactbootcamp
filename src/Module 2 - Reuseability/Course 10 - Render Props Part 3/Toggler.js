import React from 'react'

class Toggler extends React.Component{
    state = {
        on: this.props.defaultOnValue
    }

    static defaultProps = {
        defaultOnValue: false
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
        return(
            <div>
                {this.props.render(this.state.on, this.toggle)}
            </div>
        )
    }
}

export default Toggler