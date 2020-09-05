import React from 'react'
import {useParams} from 'react-router-dom'
import serviceData from './servicesData'

function ServiceDetail(){
    const {serviceId} = useParams()
    const thisService = serviceData.find((service) => {
        return(
            service._id === serviceId
        )
    })

    return(
        <div>
            <h1>This is a service detail page</h1>
            <h3>Name: {thisService.name} - Price: ${thisService.price}</h3>
            <p>Description: {thisService.description}</p>
        </div>
    )
}

export default ServiceDetail