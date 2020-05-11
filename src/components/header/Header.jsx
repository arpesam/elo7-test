import React from 'react'
import './Header.css'


const Header = () => {
  return (
    <div>
      <div className="header flex-column">
        <h1>Trabalhe no Elo7</h1>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta mauris turpis.
          Vestibulum bibendum, tortor tempus dapibus egestas, diam elit sagittis urna, non efficitur
          metus leo nec est. Curabitur placerat lorem vel volutpat efficitur. 
        </p>
      </div>
      <hr></hr>
      <a href="https://elo7.gupy.io/" className="link-open-positions" >
        Vagas em Aberto &#8811;
      </a>
    </div>
  )
}

export default Header
