import React, {useRef} from 'react'
import TarjetaFucional from './componentesUnitarios/TarjetaFuncional'
import emailjs from 'emailjs-com';


import {AiOutlineMail, AiOutlineWhatsApp} from 'react-icons/ai'; 
import {BsLinkedin} from 'react-icons/bs';

function Contacto() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o99jn8k', 'template_llmmvna', form.current, 'OdGLde0Sl77omBgi5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };


  return (
    <section id='contacto'>
      <h2>Contactarme</h2>
      <div className="container container__contacto">
        <div className="opciones__contacto">

          <TarjetaFucional icono={<AiOutlineMail />}  titulo="Mail"     
          descripcion="guille_12.12@hotmail.com" enlace="mailto:guille_12.12@outlook.com?subject" 
          mensaje="Enviar Mensaje"/>

          <TarjetaFucional icono={<BsLinkedin />}  titulo="LinkedIn" 
          descripcion="guillermo Fernandez"      enlace="https://www.linkedin.com/in/guillermo-fern%C3%A1ndez-2100051b5/" 
          mensaje="LinkedIn" />
          
          <TarjetaFucional icono={<AiOutlineWhatsApp />}  titulo="Whatsapp" 
          descripcion="Telefono"                 enlace="https://api.whatsapp.com/send?phone=541162684987" 
          mensaje="+54 11 6268-4987" />

        </div>
        <form className='formulario__contacto' ref={form} onSubmit={sendEmail} >
          <input type="text"  name='name'   placeholder='Nombre Completo' required/>
          <input type="email" name='email'  placeholder='E-mail'          required/>
          <textarea name="mensaje" rows="7" placeholder='Mensajito'      required></textarea>
          <button type='submit' className='btn btn-primario'>Enviar Mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default Contacto