import React from 'react'
import sobreMi from '../assets/me-about2.png'; 
import { FaAward }          from 'react-icons/fa';
import { FiUsers }          from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

import TarjetaFuncional from './componentesUnitarios/TarjetaFuncional';




function SobreMi() {
  return (
    <section id='sobreMi'>
      <h5>Hablemos sobre</h5>
      <h2>Un poco de mi</h2>

      <div className="container container__sobreMi">
        <div className="sobreMi">
          <div className="sobreMi__img">
            <img src={sobreMi} alt="Imagen mia" />
          </div>
        </div>

        <div className="sobreMi__contenido">

          <div className="tarjetas__personales">
            <TarjetaFuncional icono={<FaAward/>}          titulo="Estudios"     descripcion="CoderHouse Desarrollo Front-End" />
            <TarjetaFuncional icono={<FiUsers/>}          titulo="Sobresobre"     descripcion="ninguna xd"/>
            <TarjetaFuncional icono={<VscFolderLibrary/>} titulo="Proyectos"    mensaje="-> GitHub <-" enlace="https://github.com/Beck002?tab=repositories"/>
          </div>
          <p>Soy un desarrollador Front-End comprometido y responsable, entre mis objetivos esta el poder mejorar mis habilidades, encontrar diferentes formas programar y buscar la mejor manera de implementar mis nuevos conocimientos a la hora de trabajar. Me gusta la idea de resolver problemas, y que estos problemas sean los desafíos que me hacen mejorar como desarrollador. 
          </p>
          <a href="#contacto" className='btn btn-primario'>Contacto</a>
        </div>

      </div>
    </section>
  )
}

export default SobreMi