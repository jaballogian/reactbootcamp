import React, {useState} from 'react'
import {Link, Switch, Route, Redirect} from 'react-router-dom'

function App(){
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    function handleOnClick(){
        setIsLoggedIn(true)
    }

    return(
        <div>
            <Link to="/">Go to home page</Link>
            <br/>
            <Link to="/private">Go to private page</Link>

            <Switch>
                <Route exact path="/">
                    <h1>Home page, anyone is allowed here</h1>
                </Route>

                <Route path="/private">
                    {
                        isLoggedIn
                        ? <h1>Congratulation, you have logged in</h1>
                        : <Redirect to="/login"/>
                    }
                </Route>

                <Route path="/login">
                    <button onClick={handleOnClick}>Click to log in</button>
                </Route>
            </Switch>
        </div>
    )
}

export default App