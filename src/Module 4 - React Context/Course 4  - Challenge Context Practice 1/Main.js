import React from 'react'
import UserContext from './userContext'

class Main extends React.Component{
    static contextType = UserContext

    render(){
        const username = this.context

        return(
            <main>
                <p className="main">No new notification, {username}! 🎉</p>
            </main>
        )
    }
}

export default Main