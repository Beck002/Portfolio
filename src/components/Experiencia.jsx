import React from 'react'
import ExperienciaIntegral from './componentesUnitarios/ExperienciaIntegral'

import { AiOutlineHtml5 }            from 'react-icons/ai';
import { DiCss3Full, DiNpm }       from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { SiBootstrap, SiJavascript, SiWebpack } from 'react-icons/si'

function Experiencia() {
  return (
    <section id='experiencia'>
      <h5>Mis Habildiades</h5>
      <h2>Técnologias</h2>
      <div className="container container__experiencia">
       <h4>Experiencia en:</h4>

       <div className='experiencia__frontEnd'>
          <ExperienciaIntegral icono={<AiOutlineHtml5 />} tecnologia="Hmtl"               experiencia="Avanzado"/>
          <ExperienciaIntegral icono={<DiCss3Full />}     tecnologia="Css/Scss"           experiencia="Avanzado"/>
          <ExperienciaIntegral icono={<SiBootstrap />}    tecnologia="Bootsrap"           experiencia="Intermedio"/>
          <ExperienciaIntegral icono={<SiJavascript />}   tecnologia="JavaScript"         experiencia="Intermedio"/>
          <ExperienciaIntegral icono={<FaReact />}        tecnologia="React.Js"           experiencia="Básico"/>
          <ExperienciaIntegral icono={<SiWebpack />}      tecnologia="Webpack"            experiencia="Básico"/>
          <ExperienciaIntegral icono={<DiNpm />}          tecnologia="Npm"                experiencia="Básico"/>
        </div>

      </div>
    </section>
  )
}

export default Experiencia