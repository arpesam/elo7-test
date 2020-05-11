import React from 'react'
import CeoSection from './ceo-section/CeoSection'
import TeamProfiles from './team-profiles/TeamProfiles'

import './TeamSection.css'

const TeamSection = () => {
  return (
    <div className="team-section-wrapper" >
      <CeoSection />
      <TeamProfiles />
    </div>
  )
}

export default TeamSection
