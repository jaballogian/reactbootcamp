import React from 'react'
import PropTypes from 'prop-types'
import './Style.css'

function RoundedImage(props){
    const styles = {
        borderRadius: props.borderRadius
    }
    
    return(
        <img
            src={props.src}
            style={styles}
            className="round-img"
            alt={props.alt}/>
    )
}

RoundedImage.propTypes = {
    src: PropTypes.string.isRequired,
    borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

RoundedImage.defaultProps = {
    borderRadius: "50%",
    alt: ""
}

export default RoundedImage