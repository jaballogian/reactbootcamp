import React from 'react'
import{Link, Switch, Route} from 'react-router-dom'

import Home from './Home'
import About from './About'

function App(){
    return(
        <div>
            <Link to="/">Go to home page</Link>
            <br/>
            <Link to="/about">Go to about page</Link>

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/about">
                    <About/>
                </Route>
            </Switch>
        </div>
    )
}

export default App