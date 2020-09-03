import React from 'react'
import {UserContextConsumer} from './userContext'

function Header(){
    return(
        <UserContextConsumer>
            {(context) => {
                return(
                    <header>
                        <p>Welcome, {context.username}</p>
                    </header>
                )
            }}
        </UserContextConsumer>
    )
}

export default Header