import React from 'react'
import Header from './Components/Header'
import {Switch, Route} from 'react-router-dom'
import Home from './Pages/Home'
import ServiceList from './Pages/Services/ServicesList'
import ServiceDetail from './Pages/Services/ServiceDetail'

function App(){
    return(
        <div>
            <Header/>

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route exact path="/services">
                    <ServiceList/>
                </Route>

                <Route path="/services/:serviceId">
                    <ServiceDetail/>
                </Route>
            </Switch>
        </div>
    )
}

export default App