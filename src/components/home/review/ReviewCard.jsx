import React from "react"
import { review } from "../../data/Data"

const ReviewCard = () => {
  return (
    <>
      <div className='content grid5 mtop'>
      
      {review.map((items, index) => (
        <div className='box' key={index}>
          <h4>{items.name}</h4>
          <label>{items.total}</label>
        </div>
        ))}
      </div>
      
    </>
  )
}

export default ReviewCard