

import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Footer from '../components/Footer';
import Carrusel from '../components/carrusel';
import Carruselitem from '../components/carruselitem';
import Categoria from '../components/categoria';

import '../assets/style/Header.scss';

const App= () =>{
    return (
        <div className="App">
          <Header />
          <Search />
          <Categoria/>
          <Carruselitem/>
          <Carruselitem/>
          <Carruselitem/>
          <Carruselitem/>
          <Carrusel/>
          
          
          <Footer />
         

        </div>
    );

}
export default App;
