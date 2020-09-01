import React from 'react'
import {withHOC} from './withHOC'
import {withExtraPropsHOC} from './withExtraPropsHOC'

function App(props){
    console.log(props)
    return(
        <div>Hello World</div>
    )
}

const hOCComponent = withHOC(App)
export default hOCComponent