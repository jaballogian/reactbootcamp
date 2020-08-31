import React from 'react'

// way to use default props in function based component
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

Card.defaultProps = {
    cardColor: "blue",
    height: 100,
    width: 100
}

export default Card