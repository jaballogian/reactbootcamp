import React, {useContext} from 'react'
import './Styles.css'
import {ThemeContext} from './themeContext'

function Header(){
    // first way: without using destructuring
    // const context = useContext(ThemeContext)

    // second way: without using destructuring
    const {theme} = useContext(ThemeContext)

    return(
        // first way: without using destructuring
        // <header className={`${context.theme}-theme`}>
        //     <h2>This header uses {context.theme === "light" ? "Light" : "Dark"} Theme</h2>
        // </header>

        // second way: without using destructuring
        <header className={`${theme}-theme`}>
            <h2>This header uses {theme === "light" ? "Light" : "Dark"} Theme</h2>
        </header>
    )
}

export default Header