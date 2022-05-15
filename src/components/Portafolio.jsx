import React   from 'react'
import imagen1 from '../assets/portfolio1.jpg' 
function Portafolio() {

  const data = [
    {
      id: 1,
      imagen: imagen1,
      titulo: 'ToDo App',
      github: 'https://github.com',
      probar: 'https://github.com'
    },
    {
      id: 2,
      imagen: imagen1,
      titulo: 'ToDo App',
      github: 'https://github.com',
      probar: 'https://github.com'
    },
    {
      id: 3,
      imagen: imagen1,
      titulo: 'ToDo App',
      github: 'https://github.com',
      probar: 'https://github.com'
    },
    {
      id: 4,
      imagen: imagen1,
      titulo: 'ToDo App',
      github: 'https://github.com',
      probar: 'https://github.com'
    },
    {
      id: 5,
      imagen: imagen1,
      titulo: 'ToDo App',
      github: 'https://github.com',
      probar: 'https://github.com'
    },    {
      id: 6,
      imagen: imagen1,
      titulo: 'ToDo App',
      github: 'https://github.com',
      probar: 'https://github.com'
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