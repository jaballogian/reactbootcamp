import {useState} from 'react'

function useToggle(defaultOnValue = false){

    const [isToggleOn, setIsToggleOn] = useState(defaultOnValue)

    function toggle(){
        setIsToggleOn((previousToggle) => {
            return(
                !previousToggle
            )
        })
    }

    return {isToggleOn, toggle}
}

export default useToggle