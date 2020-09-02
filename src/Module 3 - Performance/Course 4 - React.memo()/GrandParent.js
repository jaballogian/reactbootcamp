import React from 'react'
import Parent from './Parent'

function GrandParent(){
    console.log("[👴🏼]   [ ]   [ ]   [ ] rendered")
    return(
        <div>
            <p>I'm a GrandParent component</p>
            <Parent/>
            <Parent/>
        </div>
    )
}

export default React.memo(GrandParent)