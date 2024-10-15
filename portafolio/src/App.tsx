import React from 'react';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import MiPersona from './components/MiPersona';
import './App.css';
import './index.css';

const App = () => {
  return (
    <>
      <section className="photo" id="inicio">
        <Navbar />
      </section>
      <section id="mi-persona">
      <MiPersona />
      </section>
      <section id="trabajo">
      <Portfolio />
      </section>

      <section id="contacto">

      </section>

    </>
  );
};

export default App;
