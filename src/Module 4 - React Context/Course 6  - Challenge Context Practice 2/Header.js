import React from 'react'
import UserContext from './userContext'

function Header(){
    return(
        <UserContext.Consumer>
            {(username) => {
                return(
                    <header>
                        <p>Welcome, {username}</p>
                    </header>
                )
            }}
        </UserContext.Consumer>
    )
}

export default Header