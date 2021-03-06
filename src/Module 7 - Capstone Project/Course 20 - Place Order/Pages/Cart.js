import React, {useContext, useState} from 'react'
import {Context} from '../Context'
import CartItem from '../Components/CartItem'

function Cart(){
    const {cartItems, emptyCart} = useContext(Context)
    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})
    const [buttonText, setButtonText] = useState("Place Order")

    const cartItemElements = cartItems.map((item) => {
        return(
            <CartItem key={item.id} item={item}/>
        )
    })

    function placeOrder(){
        setButtonText("Ordering...")
        setTimeout(() => {
            return(
                console.log("Order placed"),
                setButtonText("Place Order"),
                emptyCart()
            )
        }, 3000)
    }

    return(
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total cost: {totalCostDisplay}</p>
            <div className="order-button">
                <button onClick={placeOrder}>{buttonText}</button>
            </div>
        </main>
    )
}

export default Cart