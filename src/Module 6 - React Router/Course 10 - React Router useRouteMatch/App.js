import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import {Switch, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Profile from './Pages/Profile/Profile'

function App(){
    return(
        <div>
            <Header/>

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                
                <Route path="/user">
                    <Profile/>
                </Route>
            </Switch>

            <Footer/>
        </div>
    )
}

export default App