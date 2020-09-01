import React from 'react'
import {withToggler} from './HOCs/withToggler'

function Menu(props){
    const navStyles = {
        display: props.on ? "block" : "none"
    }

    return(
        <div>
            <button onClick={props.toggle}>
                {props.on ? "Hide" : "Show"} Menu
            </button>

            <nav style={navStyles}>
                <h6>Signed in as Jabal Logian</h6>
                <p>Your Profile</p>
                <p>Your repositories</p>
                <p>Your stars</p>
                <p>Your gists</p>
            </nav>
        </div>
    )
}

export default withToggler(Menu, {defaultOnValue: true})