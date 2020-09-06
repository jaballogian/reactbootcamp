import React from 'react'
import productsData from './productsData'

function Products(){
    const productList = productsData.map((productItem) => {
        return(
            <div key={productItem.id}>
                <h3>Name: {productItem.name}</h3>
                <p>Price: ${productItem.price}</p>
                <hr/>
            </div>
        )
    })
    
    return(
        <div>
            <h1>This is a products page</h1>
            {productList}
        </div>
    )
}

export default Products