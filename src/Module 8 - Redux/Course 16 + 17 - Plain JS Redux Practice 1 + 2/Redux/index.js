import countReducer from './count'
import favoriteThingReducer from './favoriteThing'
import youTubeVideoReducer from './youTubeVideo'
import userReducer from './user'
const redux = require("redux")
const {combineReducers, createStore} = redux

const rootReducer = combineReducers({
    count: countReducer,
    favoriteThing: favoriteThingReducer,
    youTubeVideo: youTubeVideoReducer,
    user: userReducer
})

const store = createStore(rootReducer)
store.subscribe(() => {
    return(
        console.log(store.getState())
    )
})

export default store