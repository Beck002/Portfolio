import React from 'react'
import CV    from '../../assets/curriculum.pdf'
function CTA() {
  return (
    <div className='cta'>
      <a href={CV} download className="btn">Descargar Cv</a>
      <a href="#contacto" className="btn btn-primario">¡Hablemos!</a>
    </div>
  )
}

export default CTA