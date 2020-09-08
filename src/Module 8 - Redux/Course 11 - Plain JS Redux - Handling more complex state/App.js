import React from 'react'

const redux = require("redux")

function changeCount(amount = 1){
    return{
        type: "CHANGE_COUNT",
        payload: amount
    }
}

function addFavoriteThing(thing){
    return{
        type: "ADD_FAVORITE_THING",
        payload: thing
    }
}

const initialState = {
    count: 0,
    favoriteThing: []
}

function reducer(state = initialState, action){
    switch(action.type){
        case "CHANGE_COUNT":
            return{
                ...state,
                count: state.count + action.payload
            }
        case "ADD_FAVORITE_THING":
            return{
                ...state,
                favoriteThing: [
                    ...state.favoriteThing,
                    action.payload]
            }
        default:
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    return(
        console.log(store.getState())
    )
})

store.dispatch(changeCount(2))
store.dispatch(addFavoriteThing("Hi, I'm Jabal"))
store.dispatch(addFavoriteThing("And I love Belgium so much"))

function App(){
    return(
        <div></div>
    )
}

export default App