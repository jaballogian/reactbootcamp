import React from 'react'
import GrandChild from './GrandChild'

function Child(){
    return(
        <>
            <h1>Hi, I'm the child component</h1>
            <GrandChild/>
        </>
    )
}

export default Child