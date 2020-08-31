import React from 'react'

// way to use default props in function based component
// function Card(props){
//     const styles = {
//         backgroundColor: props.cardColor,
//         height: props.height,
//         width: props.width
//     }

//     return(
//         <div style={styles}></div>
//     )
// }

// Card.defaultProps = {
//     cardColor: "blue",
//     height: 100,
//     width: 100
// }

// way to use props in class based component
class Card extends React.Component{
    static defaultProps = {
        cardColor: "blue",
        height: 100,
        width: 100
    }

    render(){
        const styles = {
            backgroundColor: this.props.cardColor,
            height: this.props.height,
            width: this.props.width 
        }

        return(
            <div style={styles}></div>
        )
    }
}

export default Card