import React from 'react'
import {Link} from 'react-router-dom'

function Header(){
    return(
        <header>
            <ul>
                <li>
                    <Link to="/">Go to home page</Link>
                </li>
                
                <li>
                    <Link to="/profile">Go to profile page</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header