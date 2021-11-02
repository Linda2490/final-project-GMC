import React from 'react'
import './Landpage.css'
import { Link } from 'react-router-dom'

const Landpage = () => {
  return (
    <div>
      <header  >
      <p style={{textAlign:'center'}}>PARKAR: POUR UNE NOUVELLE EXPERIENCE DE CONTROL DE VOTRE VEHICULE </p> 
      

      </header>
      
      <div className="main">

        <div className="d1"></div>
        <div className="d2"></div>
        <div className="d3"></div>
        <div className="d4"></div>
      </div>

      <div className="sign">
        <span class="fast-flicker">
          🚗🚗🚗🚗🚗🚗🚗parKararKararp
        </span>
        <span className="fast-flicker">🚗ark</span>
        <span className="fast-flicker">🚗ar</span>
      </div>
         
      
      <footer>
          <div className="footer-dark">
  <footer>
    <div >
      <div className="row">
        {/* <div className="col-sm-6 col-md-3 item">
          <h3>Services</h3>
          <ul>
            <li >kilometrage</li>
            <li>consommation</li>
            
          </ul>
        </div> */}
        <div className="col-sm-6 col-md-3 item">
          <h3>A propos</h3>
          <ul>
            <li><Link to="/alldrivers">Conducteurs</Link></li>
            <li><Link to="/allcars">Vehicules</Link></li>
            
          </ul>
        </div>
        <div className="col-md-6 item text">
          <h3>PARKAR app</h3>
          <p>L’application permet au gestionnaire de parc automobile de collecter une grande variété de données. Elle automatise la mise en forme de ces dernières (Excel, Word, PDF) pour les rendre immédiatement exploitables et compréhensibles. PARKAR app vous apportera une aide précieuse dans la gestion administrative de votre parc automobile.</p>
        </div>
      </div>
      <p className="copyright">PARKAR © 2021</p>
    </div>
  </footer>
</div>

      </footer>
      
      
      
         
         
    </div>
  )
}

export default Landpage
