import React from 'react';
import { Button } from 'pixel-retroui';
import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector('.nav')?.clientHeight || 0; // Obtén la altura de la navbar
      const sectionTop = section.getBoundingClientRect().top + window.scrollY; // Obtén la posición top de la sección
      window.scrollTo({ top: sectionTop - navbarHeight, behavior: 'smooth' }); // Desplázate considerando la altura de la navbar
    }
  };

  return (
    <section className="photo" id="inicio">
      <div className="nav" id="sticker">
        <div className="menu">
          <h5 className="logo">Daniel Santelices</h5>
          <ul>
            <li>
              <Button 
              bg="#532a6a"
              textColor="#ffffff"
              borderColor="#000000" onClick={() => scrollToSection('inicio')}>Inicio</Button>
            </li>
            <li>
              <Button bg="#532a6a"
              textColor="#ffffff"
              borderColor="#000000" onClick={() => scrollToSection('mi-persona')}>Mi Persona</Button>
            </li>
            <li>
              <Button bg="#532a6a"
              textColor="#ffffff"
              borderColor="#000000" onClick={() => scrollToSection('trabajo')}>Trabajo</Button>
            </li>
            <li>
              <Button bg="#532a6a"
              textColor="#ffffff"
              borderColor="#000000" onClick={() => scrollToSection('contacto')}>Contacto</Button>
            </li>
          </ul>
        </div>
      </div>
      <div className="photo-text">
        <img className='Logo_img' src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />
        <h4 data-ix="skype">Analista Programador</h4>
        <p data-ix="subtitle-hero-up">Mis redes sociales</p>
        <div className="social-icons">
          <a className="icons__link" href="https://github.com/LicesDev" target="_blank" rel="noopener noreferrer">
            <i className="icons__icons fab fa-github"></i>
          </a>
          <a className="icons__link" href="https://www.linkedin.com/in/daniel-santelices-m/" target="_blank" rel="noopener noreferrer">
            <i className="icons__icons fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="overlay"></div>
    </section>
  );
};

export default Navbar;
