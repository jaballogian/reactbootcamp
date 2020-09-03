import React from 'react'
import {UserContextConsumer} from './userContext'
import Header from './Header'
import './Styles.css'

class App extends React.Component{
    state = {
        newUsername: ""
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState(() => {
            return{
                [name]: value
            }
        })
    }

    render(){
        return(
            <div>
                <Header/>
                
                <UserContextConsumer>
                    {(context) => {
                        return(
                            <main>
                                <p className="main">No new notification, {context.username}! 🎉</p>
    
                                <input
                                    type="text"
                                    name="newUsername"
                                    placeholder="New Username"
                                    value={this.state.newUsername}
                                    onChange={this.handleChange}/>
    
                                <button onClick={() => {
                                    return(
                                        context.changeUsername(this.state.newUsername)
                                    )
                                }}>
                                    Change Username
                                </button>
                            </main>
                        )
                    }}
                </UserContextConsumer>
            </div>
        )
    }
}

export default App