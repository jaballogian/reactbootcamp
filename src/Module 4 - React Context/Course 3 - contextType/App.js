import React from 'react'
import Header from './Header'
import Button from './Button'
import ThemeContext from './themeContext'

function App(){
    return(
        <ThemeContext.Provider value="dark">
            <div>
                <Header/>
                <Button/>
            </div>
        </ThemeContext.Provider>
    )
}

export default App