import React from 'react'
import './Card.css'


const Card = ({ title, img, description }) => {
  return (
    <div className="card">
      <img src={img} alt={title}/>
      <h4 className="to-uppercase">{title}</h4>
      <p>{description}</p>
    </div>
  )
}

export default Card
