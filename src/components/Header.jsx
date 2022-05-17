import React from 'react'
import CTA from './componentesUnitarios/CTA'
import HeaderSociales from './componentesUnitarios/HeaderSociales'

import imgCvPrincipal from '../assets/cv_img2.jpg'

function Header() {
  return (
    <header id='inicio'>
        <div className="container container__header">

          <h5>Hola Soy </h5>
          <h1>Guillermo</h1>
          <h5 className="text-light">Desarrollador Front-End</h5> 
          
          <CTA />

          <div className='img_scroll_sociales'> 

            <HeaderSociales />
            <div className="yo">
              <img src={imgCvPrincipal} alt="imagen de cv principal" />
            </div>
            <a href="#sobreMi" className='scroll__down'>Scroll Down</a>

          </div>
        </div>
    </header> 
  )
}

export default Header