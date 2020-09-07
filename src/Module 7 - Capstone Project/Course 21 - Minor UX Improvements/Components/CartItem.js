import React, {useContext, useState} from 'react'
import {Context} from '../Context'

function CartItem({item}){
    const {removeFromCart} = useContext(Context)
    const [isHovered, setIsHovered] = useState(false)

    const iconClassName = isHovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return(
        <div className="cart-item">
            <i
                className={iconClassName}
                onClick={() => {
                    return(
                        removeFromCart(item.id)
                    )
                }}
                onMouseEnter={() => {
                    return(
                        setIsHovered(true)
                    )
                }}
                onMouseLeave={() => {
                    return(
                        setIsHovered(false)
                    )
                }}>
            </i>
            <img src={item.url} width="130px" alt=""/>
            <p>$5.99</p>
        </div>
    )
}

export default CartItem