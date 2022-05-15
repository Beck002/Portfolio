import React from 'react'
import Contacto from './components/Contacto'
import Experiencia from './components/Experiencia'
import Footer from './components/Footer'
import Header from './components/Header'
import Nav from './components/Nav'
import Portafolio from './components/Portafolio'
import SobreMi from './components/SobreMi'

export const App = () => {
  return (
        <>
            <Header/>
            <Nav />
            <SobreMi />
            <Experiencia />
            <Portafolio />
            <Contacto />
            <Footer />
        </>
    )
}
