import React from 'react'

export function withFavoriteNumber(Component){
    return function(props){
        return(
            <Component myFavoriteNumber={7} {...props}/>
        )
    }
}