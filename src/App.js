import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Head from './components/Head/Head';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Head titulo="Bienvenido al mundo animal"/>
      {/* <Head titulo="Bienvenido al mundo de React" dato="Have fun!!" seccion="zapatos"/>
      <Head titulo="Bienvenido al mundo de React" dato="Have fun!!" seccion="deportes"/> */}
      
      <BrowserRouter>
        <Nav/> 
        <Main/>
      </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;
