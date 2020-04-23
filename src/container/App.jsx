

import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Footer from '../components/Footer';
import Carrusel from '../components/Carrusel';

import '../assets/style/Header.scss';

const App= () =>{
    return (
        <div className="App">
          <Header />
          <Search />
          <Carrusel />
          <Footer />


        </div>
    );

}
export default App;
