import React from 'react'
import App from './App'
import {Provider} from 'react-redux'
import store from './Redux/index'

function Index(){
    return(
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

export default Index