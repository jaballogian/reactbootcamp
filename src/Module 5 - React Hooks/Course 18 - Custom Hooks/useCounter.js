import {useState} from 'react'

function useCounter(){
    const [count, setCount] = useState(0)

    function increment(){
        console.log("Increment button is clicked")
        return(
            setCount((previousCount) => {
                return(
                    previousCount + 1
                )
            })
        )
    }

    // first way: return function using object "{}"
    return {count, increment}
}

export default useCounter