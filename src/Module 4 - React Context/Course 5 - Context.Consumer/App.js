import React from 'react'
import Header from './Header'
import Button from './Button'
import ThemeContext from './themeContext'

function App(){
    return(
        <div>
            <Header/>

            {/* dependent from context provider */}
            <ThemeContext.Consumer>
                {(theme) => {
                    return(
                        <Button theme={theme}/>
                    )
                }}
            </ThemeContext.Consumer>

            {/* independent from context provider */}
            <Button theme="light"/>
        </div>
    )
}

export default App