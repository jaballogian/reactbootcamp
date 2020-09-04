import React, {useState, useRef} from 'react'

function App(){
    const [newTodoValue, setNewTodoValue] = useState("")
    const [todoList, setTodoList] = useState([])
    const inputRef = useRef(null)

    function handleOnChange(event){
        setNewTodoValue(event.target.value)
    }

    function addTodo(event){
        event.preventDefault()
        setTodoList((previousTodoList) => {
            return(
                [...previousTodoList, newTodoValue]
            )
        })
        setNewTodoValue("")
        inputRef.current.focus()
    }

    const allTodoList = todoList.map((todo) => {
        return(
            <p key={todo}>{todo}</p>
        )
    })
    return(
        <div>
            <form>
                <input
                    ref={inputRef}
                    type="text"
                    name="todo"
                    value={newTodoValue}
                    onChange={handleOnChange}/>

                <button onClick={addTodo}>Add todo item</button>
            </form>

            {allTodoList}
        </div>
    )
}

export default App