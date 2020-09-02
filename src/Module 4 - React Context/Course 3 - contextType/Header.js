import React from 'react'
import './Styles.css'
import ThemeContext from './themeContext'

class Header extends React.Component{
    // first way to use context
    static contextType = ThemeContext

    render(){
        const theme = this.context
        return(
            <header className={`${theme}-theme`}>
                <h2>This header uses {theme === "light" ? "Light" : "Dark"} Theme</h2>
            </header>
        )
    }
}

// second way to use context
// Header.contextType = ThemeContext

export default Header