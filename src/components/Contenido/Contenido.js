import React, { Component } from 'react';
import Articulo from '../Articulo/Articulo';
import './Contenido.css';
import data from '../data'

class Contenido extends Component {
  constructor(props){
    super(props);
    this.state = {
      articulos: []
    };
    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.addArticle = this.addArticle.bind(this);
    this.resetArticles = this.resetArticles.bind(this);
  }

  componentWillMount(){
    console.log("cuando se empiece a montar")
  }

  componentDidMount(){
    console.log("cuando esté el componente montado")
    this.setState({articulos:data})
  }

  componentWillUnmount(){
    console.log("cuando se desmonte")
  }

  

  getArticles(){
    return this.state.articulos.map((articulo,i) =>
      <Articulo data={articulo} id={i+1} />
    )
  }

  addArticle(){
    let nuevoArticulo = {
      titulo:"Mi nuevo articulo",
      descripcion:"Otro día programando",
      img: "./media/pelicano4.png",
      texto: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    }
      this.setState({
        articulos:[...this.state.articulos, nuevoArticulo]
      })
  }
  
  resetArticles(){
    this.setState({
      articulos:data
    })
  }

  render() {
    return (
      <article>
        {/* <Articulo titulo={this.state.articulos[0].titulo} descripcion={this.state.articulos[0].descripcion} img={this.state.articulos[0].img}/> */}

        {/* {this.state.articulos.map(articulo=>
          <Articulo 
            titulo={articulo.titulo} 
            descripcion={articulo.descripcion} 
            img={articulo.img}
            texto={articulo.texto}
            />
          )}  */}
        
        {this.getArticles()} 
        <button onClick={this.addArticle} >Nueva entrada</button>
        <button onClick={this.resetArticles} >Reset articulos</button>
      </article>
    );
  }
}

export default Contenido;