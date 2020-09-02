import React from 'react'
import UserContext from './userContext'
import Header from './Header'
import Main from './Main'
import './Styles.css'

class App extends React.Component{
    render(){
        return(
            <UserContext.Provider value="Jabal Logian">
                <Header/>
                <Main/>
            </UserContext.Provider>
        )
    }
}

export default App