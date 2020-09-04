import React from 'react'
import {ThemeContextProvider} from './themeContext'
import App from './App'

function Index(){
    return(
        <ThemeContextProvider>
            <App/>
        </ThemeContextProvider>
    )
}

export default Index