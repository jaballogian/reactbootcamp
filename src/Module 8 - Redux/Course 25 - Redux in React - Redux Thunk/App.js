import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './Redux/index'

function App(props){
    const count = useSelector((state) => {
        return(
            state
        )
    })
    const dispatch = useDispatch()

    return(
        <div>
            <h1>{count}</h1>

            <button
                onClick={() => {
                    return(
                        dispatch(decrement())
                    )
                }}>Decrement (-)
            </button>

            <button
                onClick={() => {
                    return(
                        dispatch(increment())
                    )
                }}>Increment (+)
            </button>
        </div>
    )
}

export default App