import React from 'react'
import './Styles.css'
import {ThemeContextConsumer} from './themeContext'

function Header(){
    return(
        <ThemeContextConsumer>
            {(context) => {
                console.log("header", context)
                return(
                    <header className={`${context.theme}-theme`}>
                        <h2>This header uses {context.theme === "light" ? "Light" : "Dark"} Theme</h2>
                    </header>
                )
            }}
        </ThemeContextConsumer>
    )
}

export default Header