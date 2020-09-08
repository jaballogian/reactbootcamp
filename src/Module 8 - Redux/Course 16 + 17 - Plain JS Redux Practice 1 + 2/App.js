import React from 'react'
import store from './Redux/index'
import {changeCount} from './Redux/count'
import {addFavoriteThing} from './Redux/favoriteThing'
import {setUserDetails, removeUserDetails} from './Redux/user'

store.dispatch(changeCount(7))
store.dispatch(addFavoriteThing("I love Belgium so much"))
store.dispatch(setUserDetails({
    firstname: "Jabal",
    lastname: "Logian",
    id: 1,
    email: "nothing"
}))
store.dispatch(setUserDetails({
    email: "jaballogianrma77@gmail.com"
}))
store.dispatch(removeUserDetails())

function App(){
    return(
        <div></div>
    )
}

export default App