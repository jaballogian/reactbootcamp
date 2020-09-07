import React, {useState, useContext} from 'react'
import {Context} from '../Context'
import PropTypes from 'prop-types'

function Image({className, image}){
    const [isHovered, setIsHovered] = useState(false)
    const {toggleFavorite, cartItems, addToCart, removeFromCart} = useContext(Context)

    function heartIcon(){
        if(image.isFavorite){
            return(
                <i
                    className="ri-heart-fill favorite"
                    onClick={() => {
                        return(
                            toggleFavorite(image.id)
                        )
                    }}>
                </i>
            )
        }
        else if(isHovered){
            return(
                <i
                    className="ri-heart-line favorite"
                    onClick={() => {
                        return(
                            toggleFavorite(image.id)
                        )
                    }}>
                </i>
            )
        }
    }
    
    function cartIcon(){
        const alreadyInCart = cartItems.some((item) => {
            return(
                item.id === image.id
            )
        })

        if(alreadyInCart){
            return(
                <i
                    className="ri-shopping-cart-fill cart"
                    onClick={() => {
                        return(
                            removeFromCart(image.id)
                        )
                    }}>
                </i>
            )
        }
        else if(isHovered){
            return (
                <i
                    className="ri-add-circle-line cart"
                    onClick={() => {
                        return(
                            addToCart(image)
                        )
                    }}>
                </i>)
        }
    }

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
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    image: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image