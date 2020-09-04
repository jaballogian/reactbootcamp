import React from 'react'
import useCounter from './useCounter'

function App(){
    // first way to call custom hooks: using object "{}" and the exactly same key object
    const {count, increment} = useCounter()

    return(
        <div>
            {/* first way to use custom hooks */}
            <h1>The count is {count}</h1>
            <button onClick={increment}>Increment (+1)</button>
        </div>
    )
}

export default App