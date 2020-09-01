import React from 'react'
import Toggler from './Toggler'

function Menu(props){
    return(
        <Toggler defaultOnValue={true} render={
            (on, toggle) => {
                return(
                    <div>
                        <button onClick={toggle}>
                            {on ? "Hide" : "Show"} Menu
                        </button>

                        <nav style={{display: on ? "block" : "none"}}>
                            <h6>Signed in as Jabal Logian</h6>
                            <p>Your Profile</p>
                            <p>Your repositories</p>
                            <p>Your stars</p>
                            <p>Your gists</p>
                        </nav>
                    </div>
                )
            }
        }/>
    )
}

export default Menu