import React, { useState, useEffect } from 'react'
import './OpenPositions.css'


const OpenPositions = () => {
  const [ positions, setPositions ] = useState([])

  useEffect(() => {
    fetch('http://www.mocky.io/v2/5d6fb6b1310000f89166087b')
      .then(res => res.json())
      .then(res => setPositions(res.vagas))
  }, [])

  const formatLocalizacao = ({ localizacao }) => {
    if (localizacao) {
      return (
        <div>{
          `${localizacao.bairro} - ${localizacao.cidade}, ${localizacao.pais}`
        }</div>
      )
    }
    return 'Remoto'
  }

  const getPositions = () => {
    return positions.map((position, index) => {
      if (position.ativa) {
        return (
          <div key={index} className="flex-row positions-list">
            <div>
              <a href={position.link} target="_blank" className="link-description">
                {position.cargo}
              </a>
            </div>
            <div>{formatLocalizacao(position)}</div>
          </div>
        )
      }
    })
  }

  return (
    <div>
      {getPositions()}
    </div>
  )
}

export default OpenPositions
