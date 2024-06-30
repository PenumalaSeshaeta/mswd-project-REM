import React from "react"
import img from "../images/services.jpg"
import Back from "../common/Back"
import "../home/featured/featured.css"
import FeaturedCard from "../home/featured/FeaturedCard"

const Services = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Services' title='Services -All Services' cover={img} />
        <div className='featured container'>
          <FeaturedCard />
        </div>
      </section>
      <p>Services:</p>
      <p>1. Marketing of Homes</p>
      <p>2. Pricing of Properties</p>
      <p>3. Negotiation Services</p>
      <p>4. Inspection Services on Behalf of Clients</p>
    </>
  )
}

export default Services