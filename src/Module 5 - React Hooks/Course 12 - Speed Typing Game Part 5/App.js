import React, {useState, useEffect} from 'react'
import './Styles.css'

function App(){
    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(5)
    const [isTimeRunning, setIsTimeRunning] = useState(false)

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

    useEffect(() => {
        if(isTimeRunning && timeRemaining > 0){
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        }
        else if(timeRemaining === 0){
            console.log("The time is over")
            setIsTimeRunning(false)
        }
    }, [timeRemaining, isTimeRunning])

    return(
        <div>
            <h1>How fast do you type?</h1>

            <textarea
                onChange={handleOnChange}
                value={text}/>

            <h4>Time remaining: {timeRemaining}</h4>

            <button onClick={() => {
                return(
                    setIsTimeRunning(true)
                )
                }}
                >Start</button>

            <h1>Word count: ???</h1>
        </div>
    )
}

export default App