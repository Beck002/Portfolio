import React from 'react'
import sobreMi from '../assets/me-about2.jpg'; 
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
            <TarjetaFuncional icono={<FaAward/>}          titulo="Experiencia"  descripcion="ninguna xd"/>
            <TarjetaFuncional icono={<FiUsers/>}          titulo="Clientes"     descripcion="ninguna xd"/>
            <TarjetaFuncional icono={<VscFolderLibrary/>} titulo="Proyectos"    descripcion="ninguna xd"/>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sunt laboriosam minus debitis illo quis omnis esse ullam quasi vitae expedita dolor, at iste necessitatibus pariatur a architecto tempora suscipit, odit dignissimos accusamus? Eius, architecto! Alias possimus quibusdam dolores reprehenderit obcaecati numquam repellat repellendus iste velit impedit tempore, natus dignissimos.</p>
          <a href="#contacto" className='btn btn-primario'>Contacto</a>
        </div>

      </div>
    </section>
  )
}

export default SobreMi