import {useState, useEffect, useRef} from 'react'

function useWordGame(defaultStartingTime = 5){

    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(defaultStartingTime)
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
        setTimeRemaining(defaultStartingTime)
        setText("")
        textBoxRef.current.disabled = false
        textBoxRef.current.focus()
    }

    function endGame(){
        setIsTimeRunning(false)
        setWordCount(calculateWordCount(text))
        setTimeRemaining(defaultStartingTime)
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

    return({
        handleOnChange, 
        text, 
        setIsTimeRunning, 
        textBoxRef, 
        timeRemaining, 
        startGame, 
        isTimeRunning,
        wordCount}
    )
}

export default useWordGame