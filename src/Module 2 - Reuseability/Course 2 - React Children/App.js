import React from 'react'
import CallToAction from './CallToAction'

function App(){
    return(
        <div>
            <CallToAction>
                <h1>This is an important Call To Action</h1>
                <button>Click me now or you will miss out!</button>
            </CallToAction>

            <CallToAction>
                <form>
                    <input type="email" placeholder="Enter email address here"/>
                    <br/>
                    <button>Submit</button>
                </form>
            </CallToAction>
        </div>
    )
}

export default App