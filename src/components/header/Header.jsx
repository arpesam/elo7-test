import React from 'react'
import './Header.css'


const Header = () => {
  return (
    <div className="section">
      <div className="header flex-column">
        <h1>Trabalhe no Elo7</h1>
      </div>
      <div className="header-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta mauris turpis.
          Vestibulum bibendum, tortor tempus dapibus egestas, diam elit sagittis urna, non efficitur
          metus leo nec est. Curabitur placerat lorem vel volutpat efficitur. 
        </p>
      </div>
      <hr />
      <a href="https://elo7.gupy.io/" className="link" >
        Vagas em Aberto &#8811;
      </a>
    </div>
  )
}

export default Header
