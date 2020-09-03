import React from 'react'
import './Styles.css'
import {ThemeContextConsumer} from './themeContext'

function Header(){
    return(
        <ThemeContextConsumer>
            {(theme) => {
                return(
                    <header className={`${theme}-theme`}>
                        <h2>This header uses {theme === "light" ? "Light" : "Dark"} Theme</h2>
                    </header>
                )
            }}
        </ThemeContextConsumer>
    )
}

export default Header