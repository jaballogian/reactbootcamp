import React, {useContext} from 'react'
import Image from '../Components/Image'
import {Context} from '../Context'
import {getClass} from '../Utils/Index'

function Photos(){
    const {allPhotos} = useContext(Context)

    const imageElements = allPhotos.map((image, index) => {
        return(
            <Image key={image.id} image={image} className={getClass(index)}/>
        )
    })

    return(
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos