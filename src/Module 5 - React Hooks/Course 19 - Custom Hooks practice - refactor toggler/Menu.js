import React from 'react'
import useToggle from './useToggle'

function Menu(){
    const {isToggleOn, toggle} = useToggle(true)

    return(
        <div>
            <button onClick={toggle}>
                {isToggleOn ? "Hide" : "Show"} Menu
            </button>

            <nav style={{display: isToggleOn ? "block" : "none"}}>
                <h6>Signed in as Jabal Logian</h6>
                <p>Your Profile</p>
                <p>Your repositories</p>
                <p>Your stars</p>
                <p>Your gists</p>
            </nav>
        </div>
    )
}

export default Menu