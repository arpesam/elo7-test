import React from 'react'
import Header from './components/header/Header'
import TeamSection from './components/team-section/TeamSection'
import CompanyDescription from './components/company-description/CompanyDescription'
import OpenPositions from './components/open-positions/OpenPositions'
import './App.css'


function App() {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <TeamSection />
        <CompanyDescription />
        <OpenPositions />
      </div>
    </div>
  );
}

export default App
