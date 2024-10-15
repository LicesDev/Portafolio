import React from 'react';

const Portfolio = () => {
  return (
    <section className="content">
      <div className="grand-title" id="servicio">
        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, repellendus!</h4>
      </div>
      <div className="text">
        <div className="inner-text">
          <h3>Genialidea</h3>
          <i className="ic ion-fork"></i>
          <div className="text-box">
            <h5>Genialidea</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, modi!</p>
          </div>
        </div>
        {/* Repite las secciones inner-text como sea necesario */}
      </div>

      <section className="portafolio" id="trabajo">
        <h4>Trabajos</h4>
        <div className="portafolio-container">
          <section className="portafolio-item">
            <img src="https://unsplash.it/400/430?image=490" alt="" className="portafolio-img" />
            <section className="portafolio-text">
              <h5>Genialidea</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus doloremque, error nostrum tempora sapiente corporis.</p>
            </section>
          </section>
          {/* Agrega más items de portafolio como necesites */}
        </div>
      </section>
    </section>
  );
};

export default Portfolio;