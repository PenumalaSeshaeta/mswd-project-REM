import React from 'react'
import Featured from './featured/Featured'
import Hero from "./hero/Hero"
import Recent from "./recent/Recent"
import Awards from "./awards/Awards"
import Location from "./location/Location"
import Price from "./price/Price"
import Team from "./team/Team"
import Review from './review/Review'
const Home = () => {
    return (
    <>
    <Hero/> 
    <Featured/>
    <Review/>
    <Recent/>
    <Awards />
    <Location />
    <Team />
    <Price />
    </>
    )

}

export default Home