import countReducer from './count'
import favoriteThingReducer from './favoriteThing'
import youTubeVideoReducer from './youTubeVideo'
const redux = require("redux")
const {combineReducers, createStore} = redux

const rootReducer = combineReducers({
    count: countReducer,
    favoriteThing: favoriteThingReducer,
    youTubeVideo: youTubeVideoReducer
})

const store = createStore(rootReducer)
store.subscribe(() => {
    return(
        console.log(store.getState())
    )
})

export default store