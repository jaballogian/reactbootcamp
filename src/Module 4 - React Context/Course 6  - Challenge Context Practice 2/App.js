import React from 'react'
import UserContext from './userContext'
import Header from './Header'
import './Styles.css'

function App(){
    return(
        <div>
            <Header/>
            
            <main>
                <UserContext.Consumer>
                    {(username) => {
                        return(
                            <p className="main">No new notification, {username}! 🎉</p>
                        )
                    }}
                </UserContext.Consumer>
            </main>
        </div>
    )
}

export default App