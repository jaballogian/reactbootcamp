import React from 'react'
import './Style.css'

function CallToAction(props){
    return(
        <div className="border">
            {props.children}
        </div>
    )
}

export default CallToAction