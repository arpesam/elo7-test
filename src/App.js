import React from 'react'
import Header from './components/header/Header'
import TeamSection from './components/team-section/TeamSection'
import CompanyDescription from './components/company-description/CompanyDescription'

import './App.css'


function App() {
  return (
    <div className="App">
      <Header />
      <TeamSection />
      <CompanyDescription />
    </div>
  );
}

export default App
