import React from "react"
import Heading from "../../common/Heading"
import "./review.css"
import ReviewCard from "./ReviewCard"

const Review = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='Top Reviews from Customers' subtitle='Reviews' />
          <ReviewCard />
        </div>
      </section>
    
    </>
  )
}

export default Review