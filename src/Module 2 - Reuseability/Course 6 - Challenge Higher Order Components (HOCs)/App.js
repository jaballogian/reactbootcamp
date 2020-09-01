import React from 'react'
import {withFavoriteNumber} from './withFavoriteNumber'

function App(props){
    console.log(props)
    return(
        <div>Your favortite number is {props.myFavoriteNumber}</div>
    )
}

export default withFavoriteNumber(App)