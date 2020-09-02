import React from 'react'
import GrandChild from './GrandChild'

function Child(){
    console.log("[ ]   [ ]   [🧒🏻]   [ ] rendered")
    return(
        <div>
            <p>I'm a Child component</p>
            <GrandChild/>
            <GrandChild/>
        </div>
    )
}

export default React.memo(Child)