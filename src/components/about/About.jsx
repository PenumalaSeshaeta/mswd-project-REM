import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>May 1 2020 when I received my first check in YHSGR. It was a check for $6,000 on a deal with Michelle Leonardi in Pomona where I brought one investor from credit cards debt. Those times were tough, mentally especially. I was sitting and working in the office for long hours trying to break through, my wife was asking me if I knew what I was doing because for that last year and half I depleted most of our savings we had.
I’d never imagined 12 months later I would have made $190,000 since. But the main reason I’m sharing all of this is not for showing how much money I made. It’s actually to share the idea of not giving up and who started in the company at entry level with minimum wages and now a few years later they are making great money and are a huge as hear more and often from these guys to follow their example.</p>
          <p>Real estate businesses typically have a network of agents who help buy and sell properties. The real estate agents work with potential buyers and sellers to show them properties that meet their needs. They also negotiate prices and help to complete the sale. Realtors can be very profitable businesses.</p>
          <p>Real estate companies typically have a team of agents who handle different aspects of the business, from finding properties to negotiating deals.The size and scope of real estate businesses vary greatly. Some firms may only have a few agents, while others may have hundreds or even thousands. Some companies focus exclusively on residential properties, while others may specialize in commercial or industrial real estate.</p>
            <button className='btn2'>More About Us</button>
          </div>
        
        </div>
      </section>
    </>
  )
}

export default About