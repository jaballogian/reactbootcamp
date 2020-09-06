import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App'
import './Styles.css'

function Index(){
    return(
        <Router>
            <App/>
        </Router>
    )
}

export default Index