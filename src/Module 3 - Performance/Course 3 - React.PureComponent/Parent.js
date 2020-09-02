import React from 'react'
import Child from './Child'

class Parent extends React.Component{
    render(){
        console.log("[ ]   [👩🏼‍⚕️]   [ ]   [ ] rendered")
        return(
            <div>
                <p>I'm a Parent component</p>
                <Child/>
                <Child/>
            </div>
        )
    }
}

export default Parent