import React from 'react'
import GrandChild from './GrandChild'

class Child extends React.Component{
    render(){
        console.log("[ ]   [ ]   [🧒🏻]   [ ] rendered")
        return(
            <div>
                <p>I'm a Child component</p>
                <GrandChild/>
                <GrandChild/>
            </div>
        )
    }
}

export default Child