import React from 'react'
import Parent from './Parent'

class GrandParent extends React.Component{
    render(){
        console.log("[👴🏼]   [ ]   [ ]   [ ] rendered")
        return(
            <div>
                <p>I'm a GrandParent component</p>
                <Parent/>
                <Parent/>
            </div>
        )
    }
}

export default GrandParent