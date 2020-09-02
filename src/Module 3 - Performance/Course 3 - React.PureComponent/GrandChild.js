import React from 'react'

class GrandChild extends React.Component{
    render(){
        console.log("[ ]   [ ]   [ ]   [👶🏻] rendered")
        return(
            <div>
                <p>I'm a GrandChild component</p>
            </div>
        )
    }
}

export default GrandChild