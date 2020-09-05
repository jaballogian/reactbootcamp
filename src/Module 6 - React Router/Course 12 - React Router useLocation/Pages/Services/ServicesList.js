import React from 'react'
import servicesData from './servicesData'
import {Link, useLocation} from 'react-router-dom'

function ServicesList(){
    const location = useLocation()
    console.log(location)
    
    const services = servicesData.map((service) => {
        return(
            <h3 key={service._id}>
                <Link to={`/services/${service._id}`}>{service.name}</Link> - {service.price}
            </h3>
        )
    })

    return(
        <div>
            <h1>This is a services list page</h1>
            {services}
        </div>
    )
}

export default ServicesList