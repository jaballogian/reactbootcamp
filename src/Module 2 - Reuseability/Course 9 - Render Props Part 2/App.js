import React from 'react'
import Example from './Example'

function App(){
    return(
        <div>
            <Example render={
                function(isNight, name, number) {
                    return(
                        <div>
                            <h1>Good {isNight ? "night" : "morning"} {name}</h1>
                            <h1>Your number is {number} and
                             it's a {number >0 ? "positive" : "negative"} number</h1>
                        </div>
                    )
                }
            }/>
        </div>
    )
}

export default App