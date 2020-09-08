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

function removeFavoriteThing(thing){
    return{
        type: "REMOVE_FAVORITE_THING",
        payload: thing
    }
}

function setYouTubeTitle(title){
    return{
        type: "SET_YOUTUBE_TITLE",
        payload: title
    }
}

function upvoteVideo(){
    return{
        type: "UPVOTE_VIDEO"
    }
}

const initialState = {
    count: 0,
    favoriteThing: [],
    youTubeVideo: {
        title: "",
        viewCount: 0,
        votes: {
            up: 0,
            down: 0
        }
    }
}

console.log(initialState)

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
        case "REMOVE_FAVORITE_THING":{
            const updatedArray = state.favoriteThing.filter((thing) => {
                return(
                    thing.toLowerCase() !== action.payload.toLowerCase()
                )
            })
            return{
                ...state,
                favoriteThing: updatedArray
            }
        }
        case "SET_YOUTUBE_TITLE":
            return{
                ...state,
                youTubeVideo: {
                    ...state.youTubeVideo,
                    title: action.payload
                }
            }
        case "UPVOTE_VIDEO":
            return{
                ...state,
                youTubeVideo: {
                    ...state.youTubeVideo,
                    votes: {
                        ...state.youTubeVideo.votes,
                        up: state.youTubeVideo.votes.up + 1
                    }
                }
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

store.dispatch(setYouTubeTitle("I love Belgium"))
store.dispatch(upvoteVideo())

function App(){
    return(
        <div></div>
    )
}

export default App