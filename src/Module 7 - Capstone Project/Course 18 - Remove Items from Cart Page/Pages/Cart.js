import React, {useContext} from 'react'
import {Context} from '../Context'
import CartItem from '../Components/CartItem'

function Cart(){
    const {cartItems} = useContext(Context)
    const cartItemElements = cartItems.map((item) => {
        return(
            <CartItem key={item.id} item={item}/>
        )
    })

    return(
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total cost: </p>
            <div className="order-button">
                <button>Place order</button>
            </div>
        </main>
    )
}

export default Cart