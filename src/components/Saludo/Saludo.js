import React, { Component } from 'react';
import './Saludo.css';

class Saludo extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:this.props.username,
      age:this.props.age
    };
  }
  
  render() {
    return (
      <div>
        <h1> {this.props.username && this.props.age?`Hola ${this.props.username} tienes ${this.props.age} años`:""}
        </h1> 
      </div>
    );
  }
}

export default Saludo;