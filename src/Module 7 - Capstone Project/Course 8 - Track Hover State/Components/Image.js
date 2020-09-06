import React, {useState} from 'react'

function Image({className, image}){
    const [isHovered, setIsHovered] = useState(false)
    console.log(isHovered)

    return(
        <div 
            className={`${className} image-container`}
            onMouseEnter={() => {
                return(
                    setIsHovered(true)
                )
            }}
            onMouseLeave={() => {
                return(
                    setIsHovered(false)
                )
            }}    
        >
            <img src={image.url} alt="" className="image-grid"/>
        </div>
    )
}

export default Image