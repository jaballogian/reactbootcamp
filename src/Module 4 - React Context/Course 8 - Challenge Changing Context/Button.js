import React from 'react'
import './Styles.css'
import {ThemeContextConsumer} from './themeContext'

function Button(){
    return(
        <ThemeContextConsumer>
            {(context) => {
                console.log("button", context)
                return(
                    <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>
                        Click to change to {context.theme === "light" ? "Dark" : "Light"} theme
                    </button>
                )
            }}
        </ThemeContextConsumer>
    )
}

export default Button