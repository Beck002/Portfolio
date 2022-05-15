import React from 'react'
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage } from 'react-icons/ai'
import { BiBook }                       from 'react-icons/bi'
import { SiFiles }                from 'react-icons/si'
import { useState }                     from 'react';


function Nav() {

  const [ activeNav, setActiveNav ] = useState('#')

  return (
    <nav>
      <a href="#inicio"      className={ activeNav === '#inicio' ? 'activo' : ''}       onClick={()=> setActiveNav('#inicio')}>
        <AiOutlineHome />
      </a>
      <a href="#sobreMi"     className={ activeNav === '#sobreMi' ? 'activo' : ''}      onClick={() => setActiveNav('#sobreMi')}>
        <AiOutlineUser />
      </a>
      <a href="#experiencia" className={ activeNav === '#experiencia' ? 'activo' : ''}  onClick={() => setActiveNav('#experiencia')}>
        <BiBook />
      </a>
      <a href="#portafolio"  className={ activeNav === '#portafolio' ? 'activo' : ''}     onClick={() => setActiveNav('#portafolio')}>
        <SiFiles />
      </a>
      <a href="#contacto"   className={ activeNav === '#contacto' ? 'activo' : ''}      onClick={() => setActiveNav('#contacto')}>
        <AiOutlineMessage />
      </a>
    </nav>
  )
}

export default Nav