import React from 'react'

function TarjetaFuncional( {icono, titulo, descripcion, enlace, mensaje} ) {
    
  return (
    <article className="tarjeta__personal">
        <span className="sobreMi__icono">{icono}</span>
        <h5>{titulo}</h5>
        <small>{descripcion}</small>
        <a href={enlace} className="text-light" target="_blank" rel="noreferrer">{mensaje}</a>
    </article>
  )
}

export default TarjetaFuncional