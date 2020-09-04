import React from 'react'
import useToggle from './useToggle'

function Favorite(){
    const {isToggleOn, toggle} = useToggle(false)
    
    return(
        <div>
            <h3>Click heart to favorite</h3>

            <h1>
                <span onClick={toggle}>
                    {isToggleOn ? "❤️" : "♡"}
                </span>
            </h1>
        </div>
    )
}

export default Favorite