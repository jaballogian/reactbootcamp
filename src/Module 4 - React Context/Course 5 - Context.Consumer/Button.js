import React from 'react'
import './Styles.css'
import PropsType from 'prop-types'

function Button(props){
    return(
        <button className={`${props.theme}-theme`}>
            This button uses {props.theme === "light" ? "Light" : "Dark"} theme
        </button>
    )
}

// additional condition
Button.propsType = {
    theme: PropsType.oneOf(["light", "dark"])
}

// additional condition
Button.defaultProps = {
    theme: "light"
}

export default Button