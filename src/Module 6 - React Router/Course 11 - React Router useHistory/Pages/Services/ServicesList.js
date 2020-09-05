import React from 'react'
import servicesData from './servicesData'
import {Link} from 'react-router-dom'

function ServicesList(){
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