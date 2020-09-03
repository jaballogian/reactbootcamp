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

    function calculateWordCount(inputText){
        const wordsArray = inputText.trim().split(" ")
        return (
            wordsArray.filter(word => word !== "").length
        )
    }

    return(
        <div>
            <h1>How fast do you type?</h1>

            <textarea
                onChange={handleOnChange}
                value={text}/>

            <h4>Time remaining: ???</h4>

            <button onClick={() => {
                return(
                    console.log("word count:", calculateWordCount(text))
                )
                }}
                >Start</button>

            <h1>Word count: ???</h1>
        </div>
    )
}

export default App