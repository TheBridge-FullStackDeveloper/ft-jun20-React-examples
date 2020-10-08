import React, { Component } from 'react';
import Contenido from '../Contenido/Contenido';
import './Main.css';
import {Route, Switch } from 'react-router-dom';
import Profile from '../Profile/Profile';
import About from '../About/About';
import Sidebar from '../Sidebar/Sidebar';
import Contact from '../Contact/Contact';

class Main extends Component {
  render() {
    return (
      
      <main> 
        <Sidebar/>
        <Switch>
          <Route exact path="/" component={Contenido} />
          <Route path="/profile" component={Profile} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
    );
  }
}

export default Main;