import React from 'react'

function ExperienciaIntegral({icono, tecnologia, experiencia}) {
  return (
    <article className='experiencia__contenido'>         
      <span className="experiencia__iconos">{icono}</span>
      <div>
        <h4>{tecnologia}</h4>
        <small className='text-light'>{experiencia}</small>
      </div>
    </article>
  )
}

export default ExperienciaIntegral