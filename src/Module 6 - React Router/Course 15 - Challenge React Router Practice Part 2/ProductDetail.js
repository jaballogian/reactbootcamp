import React from 'react'
import {useParams} from 'react-router-dom'
import productsData from './productsData'

function ProductDetail(){
    const {productId} = useParams()

    const productInfo = productsData.find((product) => {
        return(
            product.id === productId
        )
    })

    console.log(productInfo)

    return(
        <div>
            <h1>Product name: {productInfo.name}</h1>
            <p>Product price: ${productInfo.price}</p>
            <p>{productInfo.description}</p>
        </div>
    )
}

export default ProductDetail