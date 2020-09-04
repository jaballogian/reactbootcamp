import React, {useContext} from 'react'
import './Styles.css'
import {ThemeContext} from './themeContext'

function Button(){
    const context = useContext(ThemeContext)

    return(
        <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>
            Click to change to {context.theme === "light" ? "Dark" : "Light"} theme
        </button>
    )
}

export default Button