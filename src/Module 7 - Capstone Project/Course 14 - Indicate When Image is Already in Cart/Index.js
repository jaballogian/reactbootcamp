import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App'
import './Styles.css'
import {ContextProvider} from './Context'

function Index(){
    return(
        <ContextProvider>
            <Router>
                <App/>
            </Router>
        </ContextProvider>
    )
}

export default Index