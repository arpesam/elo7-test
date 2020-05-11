import React from 'react'
import Card from './card/Card.jsx'
import { cardData } from './company-description';
import './CompanyDescription.css'


const CompanyDescription = () => {
  return (
    <div className="company-description">
      <div className="cards-wrapper">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      <hr />
      <a
        href="https://www.linkedin.com/company/elo7/"
        target="_blank"
        rel="noopener noreferrer"
        className="to-uppercase link"
      >
        Saiba Mais &#8811;
      </a>
      <div className="company-party-img" />
    </div>
  )
}

export default CompanyDescription
