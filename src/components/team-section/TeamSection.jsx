import React from 'react'
import './TeamSection.css'
import camila from '../../assets/images/camila.png';
import guto from '../../assets/images/guto.png';
import david from '../../assets/images/david.png';
import beatriz from '../../assets/images/beatriz.png';


const TeamSection = () => {
  return (
    <div className="team-section-wrapper" >
      <div className="ceo-section flex-row">
        <div>
          <iframe
            title="ceo-video"
            width="400"
            height="220"
            src="https://www.youtube.com/embed/UQ2-6gk9Szs"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen> 
          </iframe>
        </div>
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
      <div>
        <h3 className="to-uppercase">
          Conheça nosso time <br />
          fora de série
        </h3>
        <div className="team-gallery flex-row">
          <img src={camila} alt="image-1"/>
          <img src={guto} alt="image-2"/>
          <img src={david} alt="image-3"/>
          <img src={beatriz} alt="image-4"/>
        </div>
      </div>
    </div>
  )
}

export default TeamSection
