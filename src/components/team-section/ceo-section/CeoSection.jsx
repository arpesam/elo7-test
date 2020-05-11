import React from 'react'
import CeoVideo from './ceo-video/CeoVideo'
import './CeoSection.css'


const CeoSection = () => {
  return (
    <div className="ceo-section flex-row">
      <CeoVideo />
      <div className="flex-column ceo-text-container">
        <div>
          <h3 className="to-uppercase">Palavra do CEO</h3>
          <i className="ceo-name">Carlos Curioni</i>
        </div>

        <div>
          <p style={{ marginBottom: '20px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta mauris turpis.
            Vestibulum bibendum, tortor tempus dapibus egestas, diam elit sagittis urna, non efficitur
            metus leo nec est. Curabitur placerat lorem vel volutpat efficitur. Lorem ipsum dolor sit 
            amet.
          </p>
        </div>

      </div>
    </div>
  )
}

export default CeoSection
