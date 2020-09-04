import React, {useState, useEffect, useRef} from 'react'
import './Styles.css'

function App(){
    const STARTING_TIME = 5

    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(5)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    
    const textBoxRef = useRef(null)

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

    function startGame(){
        setIsTimeRunning(true)
        setTimeRemaining(STARTING_TIME)
        setText("")
        textBoxRef.current.disabled = false
        textBoxRef.current.focus()
    }

    function endGame(){
        setIsTimeRunning(false)
        setWordCount(calculateWordCount(text))
    }

    useEffect(() => {
        if(isTimeRunning && timeRemaining > 0){
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        }
        else if(timeRemaining === 0){
            endGame()
        }
    }, [timeRemaining, isTimeRunning])

    return(
        <div>
            <h1>How fast do you type?</h1>

            <textarea
                onChange={handleOnChange}
                value={text}
                disabled={!setIsTimeRunning}
                ref={textBoxRef}/>

            <h4>Time remaining: {timeRemaining}</h4>

            <button
                onClick={startGame}
                disabled={isTimeRunning}
                >Start
            </button>

            <h1>Word count: {wordCount}</h1>
        </div>
    )
}

export default App