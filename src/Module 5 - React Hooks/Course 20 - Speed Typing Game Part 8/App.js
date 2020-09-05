import React from 'react'
import './Styles.css'
import useWordGame from './Hooks/useWordGame'

function App(){
    const {
        handleOnChange, 
        text, 
        setIsTimeRunning, 
        textBoxRef, 
        timeRemaining, 
        startGame, 
        isTimeRunning, 
        wordCount} = useWordGame(5)

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