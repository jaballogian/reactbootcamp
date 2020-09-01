import React from 'react'

function Example(props){
    return(
        <div>
            {props.render(true, "Jabal Logian", 7)}
        </div>
    )
}
export default Example