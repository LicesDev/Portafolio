import React from 'react';
import { Bubble } from 'pixel-retroui';
import './MiPersona.css';

const MiPersona = () => {
  return (
       <section className="content">
        <div className="burbuja">
           <Bubble
  direction="left"
  bg="black"
  textColor="white"
  borderColor="white"
>
      Hola,
      Soy Daniel Santelices e inicié mi trayectoria profesional como Profesor de Ciencias Naturales y recientemente he completado mis estudios para convertirme en un Analista Programador especializado en Python, Automatización y RPA. Soy hábil en la resolución de problemas, disfruto aprendiendo nuevas habilidades y los desafíos me motivan a encontrar las mejores soluciones. Destaco por mi lógica para la resolución de problemas y mi habilidad para interactuar con clientes de todos los niveles.
    </Bubble>
    </div>
    <img className='logo_nobg' src={`${process.env.PUBLIC_URL}/logo_nobg.png`} alt="logo" />
      </section>
  );
};

export default MiPersona;