import React, { Component } from 'react';
import './Articulo.css';

class Articulo extends Component {
  constructor(props){
    super(props);
    this.state = {
      titulo: this.props.data.titulo +" "+this.props.id,
      descripcion: "|"+this.props.data.descripcion+"|",
      img:this.props.data.img,
      texto:this.props.data.texto.toUpperCase()
    };
  }
  render() {
    return (
      <section>
        <h2>{this.state.titulo}</h2>
        <h5>{this.state.descripcion}</h5>
        <img src={this.state.img} alt="Pelicano"/>
        <p>{this.state.texto}</p>
      </section>
    );
  }
}

export default Articulo;