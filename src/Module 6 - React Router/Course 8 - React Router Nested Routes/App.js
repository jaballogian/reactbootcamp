import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import {Switch, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Profile from './Pages/Profile/Profile'
import Info from './Pages/Profile/Info'
import Settings from './Pages/Profile/Settings'

function App(){
    return(
        <div>
            <Header/>

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                
                <Route exact path="/profile">
                    <Profile/>
                </Route>

                <Route path="/profile/info">
                    <Info/>
                </Route>

                <Route path="/profile/settings">
                    <Settings/>
                </Route>
            </Switch>

            <Footer/>
        </div>
    )
}

export default App