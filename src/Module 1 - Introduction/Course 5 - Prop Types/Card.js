import React from 'react'
import PropTypes from 'prop-types'

function Card(props){
    const styles = {
        backgroundColor: props.cardColor,
        height: props.height,
        width: props.width
    }

    return(
        <div style={styles}></div>
    )
}

Card.propTypes = {
    cardColor: PropTypes.string.isRequired,
    // another way: below is example of allowed values 
    // cardColor: PropTypes.oneOf(["red", "blue", "green"]).isRequired
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
}

// default props can fill required props
Card.defaultProps = {
    height: 100,
    width: 100
}

export default Card