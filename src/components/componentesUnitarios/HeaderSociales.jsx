import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

function HeaderSociales() {
  return (
    <div className='header__sociales'>
      <a href="https://www.linkedin.com/in/guillermo-fern%C3%A1ndez-2100051b5/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
      <a href="https://github.com/Beck002"   target="_blank" rel="noreferrer"><BsGithub/></a>
    </div>
  )
}

export default HeaderSociales