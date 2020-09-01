import React from 'react'
import {withHOC} from './withHOC'
import {withExtraPropsHOC} from './withExtraPropsHOC'

function App(props){
    console.log(props)
    return(
        <div>Hello World</div>
    )
}

// first way to use HOC
// const hOC = withHOC(App)
// export default hOC

// second way to use HOC (with extra props)
const extraPropsHOC = withExtraPropsHOC(App)
export default extraPropsHOC