import React from 'react'
import CeoVideo from './ceo-video/CeoVideo'
import './CeoSection.css'


const CeoSection = () => {
  return (
    <div className="ceo-section flex-row">
      <CeoVideo />
      <div className="ceo-text flexx-column">
        <div>
          <h4 className="to-uppercase">Palavra do CEO</h4>
          <p className="ceo-name">
            <i>Carlos Curioni</i>
          </p>
        </div>
        <p style={{ marginBottom: '30px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta mauris turpis.
          Vestibulum bibendum, tortor tempus dapibus egestas, diam elit sagittis urna, non efficitur
          metus leo nec est. Curabitur placerat lorem vel volutpat efficitur. Lorem ipsum dolor sit 
          amet.
        </p>
      </div>
    </div>
  )
}

export default CeoSection
