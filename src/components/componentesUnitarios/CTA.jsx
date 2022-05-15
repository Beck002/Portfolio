import React from 'react'
import CV    from '../../assets/cv.pdf'
function CTA() {
  return (
    <div className='cta'>
      <a href={CV} download className="btn">Descargar</a>
      <a href="#contacto" className="btn btn-primario">¡Hablemos!</a>
    </div>
  )
}

export default CTA