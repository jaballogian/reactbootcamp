import React from 'react'
import {useParams, useHistory} from 'react-router-dom'
import serviceData from './servicesData'

function ServiceDetail(){
    const {serviceId} = useParams()
    const history = useHistory()

    const thisService = serviceData.find((service) => {
        return(
            service._id === serviceId
        )
    })

    function handleOnClick(){
        history.push("/services")
    }

    return(
        <div>
            <h1>This is a service detail page</h1>
            <h3>Name: {thisService.name} - Price: ${thisService.price}</h3>
            <p>Description: {thisService.description}</p>
            <button onClick={handleOnClick}>Go back to all services</button>
        </div>
    )
}

export default ServiceDetail