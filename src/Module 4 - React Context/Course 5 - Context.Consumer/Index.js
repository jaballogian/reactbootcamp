import React from 'react'
import ThemeContext from './themeContext'
import App from './App'

function Index(){
    return(
        <ThemeContext.Provider value={"dark"}>
            <App/>
        </ThemeContext.Provider>
    )
}

export default Index