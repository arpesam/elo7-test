import React from 'react'
import camila from '../../../assets/images/camila.png';
import guto from '../../../assets/images/guto.png';
import david from '../../../assets/images/david.png';
import beatriz from '../../../assets/images/beatriz.png';

import './TeamProfiles.css'

const TeamProfiles = () => {
  return (
    <div>
      <h3 className="to-uppercase title">
        Conheça nosso time <br />
        fora de série
      </h3>
      <div className="team-gallery flex-row">
        <img src={camila} alt="camila-1"/>
        <img src={guto} alt="guto-2"/>
        <img src={david} alt="david-3"/>
        <img src={beatriz} alt="beatriz-4"/>
      </div>
    </div>
  )
}

export default TeamProfiles
