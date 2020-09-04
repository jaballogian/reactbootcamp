import React, {useContext} from 'react'
import './Styles.css'
import {ThemeContext} from './themeContext'

function Button(){
    // first way: without using destructuring
    // const context = useContext(ThemeContext)

    // second way: using destructuring
    const {theme, toggleTheme} = useContext(ThemeContext)

    return(
        // first way: without using destructuring
        // <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>
        //     Click to change to {context.theme === "light" ? "Dark" : "Light"} theme
        // </button>

        // second way: using destructuring
        <button onClick={toggleTheme} className={`${theme}-theme`}>
            Click to change to {theme === "light" ? "Dark" : "Light"} theme
        </button>
    )
}

export default Button