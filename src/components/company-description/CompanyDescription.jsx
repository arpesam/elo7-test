import React from 'react'
import Card from './card/Card.jsx'
import lifeQuality from '../../assets/images/qualidade.png'
import relaxed from '../../assets/images/descontracao.png'
import activity from '../../assets/images/atividades.png'
import './CompanyDescription.css'


const CompanyDescription = () => {
  const cardData = [
    {
      title: 'Qualidade de vida',
      img: lifeQuality,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta mauris turpis.
      Vestibulum bibendum, tortor tempus dapibus egestas, diam elit sagittis urna, non efficitur
      metus.`
    },
    {
      title: 'Embiente descontraído',
      img: relaxed,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta mauris turpis.
      Vestibulum bibendum, tortor tempus dapibus egestas, diam elit sagittis urna, non efficitur
      metus leo nec est. Curabitur placerat lorem vel volutpat efficitur. Lorem ipsum dolor sit 
      amet.`
    },
    {
      title: 'Atividades extras',
      img: activity,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta mauris turpis.
      Vestibulum bibendum, tortor tempus dapibus egestas, diam elit sagittis urna, non efficitur
      metus leo nec est. Curabitur placerat lorem vel.`
    }
  ]

  return (
    <div className="company-description">
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  )
}

export default CompanyDescription
