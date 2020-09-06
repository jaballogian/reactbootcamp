import React from 'react'

function Image({className, image}){
    return(
        <div className={`${className} image-container`}>
            <img src={image.url} alt="" className="image-grid"/>
        </div>
    )
}

export default Image