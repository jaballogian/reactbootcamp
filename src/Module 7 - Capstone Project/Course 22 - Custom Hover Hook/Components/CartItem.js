import React, {useContext, useState} from 'react'
import {Context} from '../Context'
import useHover from '../Hooks/useHover'

function CartItem({item}){
    const {removeFromCart} = useContext(Context)
    const [isHovered, ref] = useHover()
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
                ref={ref}>
            </i>
            <img src={item.url} width="130px" alt=""/>
            <p>$5.99</p>
        </div>
    )
}

export default CartItem