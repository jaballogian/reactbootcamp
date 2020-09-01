import React from 'react'

export function withExtraPropsHOC(Component){
    return function(props){
        return(
            <Component anotherProps="blah blah blah" {...props}/>
        )
    }
}