import React from 'react'
import './Styles.css'
import ThemeContext from './themeContext'

function Header(){
    return(
        <ThemeContext.Consumer>
            {(theme) => {
                return(
                    <header className={`${theme}-theme`}>
                        <h2>This header uses {theme === "light" ? "Light" : "Dark"} Theme</h2>
                    </header>
                )
            }}
        </ThemeContext.Consumer>
    )
}

export default Header