import React from 'react'
import Parent from './Parent'

class GrandParent extends React.Component{
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.count === this.props.count){
            return false
        }
        return true
    }
    
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