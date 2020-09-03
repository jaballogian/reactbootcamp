import React from 'react'
import './Styles.css'
import {ThemeContextConsumer} from './themeContext'

function Button(props){
    return(
        <ThemeContextConsumer>
            {(theme) => {
                return(
                    <button className={`${theme}-theme`}>
                        This button uses {theme === "light" ? "Light" : "Dark"} theme
                    </button>
                )
            }}
        </ThemeContextConsumer>
    )
}

export default Button