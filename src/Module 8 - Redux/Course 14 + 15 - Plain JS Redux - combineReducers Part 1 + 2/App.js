import React from 'react'
import store from './Redux/index'
import {changeCount} from './Redux/count'
import {addFavoriteThing} from './Redux/favoriteThing'

store.dispatch(changeCount(7))
store.dispatch(addFavoriteThing("I love Belgium so much"))

function App(){
    return(
        <div></div>
    )
}

export default App