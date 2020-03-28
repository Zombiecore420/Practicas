import React from 'react';
//import '../assets/style/Carrusel.scss';

const Carrusel=({children})=>(
  <section className="Carrusel">
    <div className="carousel__container">
    {children}
      </div>
  </section>
);
export default Carrusel;
