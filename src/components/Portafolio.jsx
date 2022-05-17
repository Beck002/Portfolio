import React   from 'react'
import imgTodoApp from '../assets/ToDoApp.png' 
import imgEcommerce from '../assets/img_ecommerce.png' 
import blackJackJs from '../assets/BlackJackJavaScript.png' 
import imgCalculadoraReact from '../assets/CalculadoraReact.png' 

function Portafolio() {

  const data = [
    {
      id: 1,
      imagen: imgEcommerce,
      titulo: 'Ecommerce (Solo HTML/CSS/SCSS)',
      github: 'https://github.com/Beck002/Guillermo_Fernandez',
      probar: 'https://beck002.github.io/Guillermo_Fernandez/'

    },
    {
      id: 2,
      imagen: imgCalculadoraReact,
      titulo: 'Calculadora con React',
      github: 'https://github.com/Beck002/Calculadora',
      probar: 'https://github.com'
    },
    {
      id: 3,
      imagen: blackJackJs,
      titulo: 'Juego Black Jack (Solo JavaScript)',
      github: 'https://github.com/Beck002/BlackJack',
      probar: 'https://beck002.github.io/BlackJack/'
    },
    {
      id: 4,
      imagen: imgTodoApp,
      titulo: 'Aplicación ToDo (Vanilla JavaScript)',
      github: 'https://github.com/Beck002/TodoApp',
      probar: 'https://beck002.github.io/TodoApp/'

    },

  ];


  return (
    <section id='portafolio'>
        <h5>Trabajos Recientes</h5>
        <h2>Portafolio</h2>

      <div className="container container__portafolio">
        {
          data.map(({id, imagen, titulo, github, probar}) =>{
            return(

              <article key={id} className='portafolio__item'>

                <div className="portafolio__item__img">
                  <img src={imagen} alt="imagen de la web" />
                </div>
                <h3>{titulo}</h3>
                <div className="portafolio__item__cta">
                  <a href={github} className='btn'              target="_blank"  rel = "noreferrer">Github</a>
                  <a href={probar} className="btn btn-primario" target="_blank"  rel = "noreferrer">Probar</a>
                </div>
              </article>

            )
          })
        }        
      </div>
    </section>
  )
}

export default Portafolio