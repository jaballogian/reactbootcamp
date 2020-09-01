import React from 'react'

export function withHOC(Component){
    return function(props){
        return(
            <Component {...props}/>
        )
    }
}