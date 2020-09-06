import React, {useState, useContext} from 'react'
import {Context} from '../Context'

function Image({className, image}){
    const [isHovered, setIsHovered] = useState(false)
    const {toggleFavorite} = useContext(Context)

    const heartIcon = isHovered &&
        <i
            className="ri-heart-line favorite"
            onClick={() => {
                return(
                    toggleFavorite(image.id)
                )
            }}>
        </i>
        
    const cartIcon = isHovered && <i className="ri-add-circle-line cart"></i>

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
            {heartIcon}
            {cartIcon}
        </div>
    )
}

export default Image