import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

function HeaderSociales() {
  return (
    <div className='header__sociales'>
      <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin/></a>
      <a href="https://www.github.com"   target="_blank" rel="noreferrer"><BsGithub/></a>
    </div>
  )
}

export default HeaderSociales