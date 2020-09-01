import React from 'react'
import './Styles.css'

function Callout(props){
    return(
        <div className="callout">
            {props.children}
        </div>
    )
}

export default Callout