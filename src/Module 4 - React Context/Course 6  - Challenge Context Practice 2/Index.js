import React from 'react'
import UserContext from './userContext'
import App from './App'

function Index(){
    return(
        <UserContext.Provider value={"Jabal Logian"}>
            <App/>
        </UserContext.Provider>
    )
}

export default Index