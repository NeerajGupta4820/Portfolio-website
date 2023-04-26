import React from 'react';
import './card.css'
const Card = ({emoji,heading,detail,color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
        <img src={emoji} alt=''/>
        <span>{heading}</span>
        <span>{detail}</span>
        <button className='c-button'>Learn More</button>
    </div>
  )
}

export default Card;
