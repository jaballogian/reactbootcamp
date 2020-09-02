import React from 'react'

function GrandChild(){
    console.log("[ ]   [ ]   [ ]   [👶🏻] rendered")
    return(
        <div>
            <p>I'm a GrandChild component</p>
        </div>
    )
}

export default React.memo(GrandChild)