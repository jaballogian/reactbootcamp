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
                    <Link to="/services">Go to services page</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header