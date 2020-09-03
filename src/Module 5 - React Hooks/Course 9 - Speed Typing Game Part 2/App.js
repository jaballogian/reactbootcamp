import React, {useState} from 'react'
import './Styles.css'

function App(){
    const [text, setText] = useState("")

    function handleOnChange(event) {
        const {value} = event.target
        return(
            setText(value)
        )
    }

    console.log(text)

    return(
        <div>
            <h1>How fast do you type?</h1>

            <textarea
                onChange={handleOnChange}
                value={text}/>

            <h4>Time remaining: ???</h4>

            <button>Start</button>

            <h1>Word count: ???</h1>
        </div>
    )
}

export default App