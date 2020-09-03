import React from 'react'
import {UserContextProvider} from './userContext'
import App from './App'

function Index(){
    return(
        <UserContextProvider>
            <App/>
        </UserContextProvider>
    )
}

export default Index