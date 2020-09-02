import React from 'react'
import './Styles.css'
import ThemeContext from './themeContext'

class Button extends React.Component{
    // first way to use context
    static contextType = ThemeContext

    render(){
        const theme = this.context
        return(
            <button className={`${theme}-theme`}>
                This button uses {theme === "light" ? "Light" : "Dark"} theme
            </button>
        )
    }
}

// second way to use context
// Button.contextType = ThemeContext

export default Button