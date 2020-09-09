import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

export function increment(){
    return ((dispatch, getState) => {
        const number = getState()
        const baseUrl = "https://swapi.dev/api/people"
        fetch(`${baseUrl}/${number}`)
            .then((response) => {
                return(
                    response.json()
                )
            })
            .then((response) => {
                console.log(response)
                dispatch({
                    type: "INCREMENT",
                    payload: response
                })
            })
    })
}

export function decrement(){
    return{
        type: "DECREMENT"
    }
}

function reducer(count = 1, action){
    switch(action.type){
        case "INCREMENT":
            return count + 1
        case "DECREMENT":
            return count - 1
        default:
            return count
    }
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => {
    return(
        console.log(store.getState())
    )
})

export default store