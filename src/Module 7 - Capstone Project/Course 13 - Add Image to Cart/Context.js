import React, {useState, useEffect} from 'react'

const Context = React.createContext()

function ContextProvider({children}){
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(() => {
        fetch(url)
            .then((response) => {
                return(
                    response.json()
                )
            })
            .then((data) => {
                return(
                    setAllPhotos(data)
                )
            })
    }, [])

    function toggleFavorite(id){
        const updatedArray = allPhotos.map((photoItem) => {
            if(photoItem.id === id){
                return(
                    {...photoItem,
                    isFavorite: !photoItem.isFavorite}
                )
            }
            return photoItem
        })

        setAllPhotos(updatedArray)
    }

    function addToCart(newItem){
        setCartItems((previousItems) => {
            return(
                [...previousItems,
                newItem]
            )
        })
    }

    console.log(cartItems)
    
    return(
        <Context.Provider value={{allPhotos, toggleFavorite, addToCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}