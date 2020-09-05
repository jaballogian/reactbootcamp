import React from 'react'
import {Link} from 'react-router-dom'

function Profile(){
    return(
        <div>
            <h1>This is a profile page</h1>

            <ul>
                <li>
                    <Link to="/profile/info">Go to profile info page</Link>
                </li>

                <li>
                    <Link to="/profile/settings">Go to profile settings page</Link>
                </li>
            </ul>
        </div>
    )
}

export default Profile