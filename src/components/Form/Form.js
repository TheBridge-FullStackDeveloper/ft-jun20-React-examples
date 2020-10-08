import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props){
    super(props);

    this.state = {
      username:"",
      age:null,
      errormessage: ""
    }
    this.validar = this.validar.bind(this);
  }

  // Manejar el metodo del padre
  enviarCambios(){
    const nombre = this.state.username
    const edad = this.state.age
    this.props.onUserChange(nombre,edad)
  }

  validar = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "edad") {
      if (val !="" && !Number(val)) {
        err = <strong>La edad debe ser un numero</strong>;
      }else{
        // Cambia la edad y cuando acaba envía cambios al padre
        this.setState({age: event.target.value}, this.enviarCambios);
      }
    }else if (nam === "nombre") {
        // Cambia la edad y cuando acaba envía cambios al padre
      this.setState({username: event.target.value}, this.enviarCambios);
    }
    this.setState({errormessage: err});
  }

  // Para hacer submit del formulario
  submitHandler = (event) => {
    event.preventDefault();
    alert("Usted ha enviado: " + this.state.username +" "+this.state.age);
  }

  render() {
    return (
    <form onSubmit={this.submitHandler}>
      <p>Introduzca su nombre:</p>
      <input type='text'name="nombre" onChange={this.validar}/>
      <p>Introduzca su edad:</p>
      <input type='text' name="edad" onChange={this.validar}/>

      {this.state.username && this.state.age?<input type="submit" value="Envia!!!"/>:""}

      {this.state.errormessage?<p>{this.state.errormessage}</p>:""}
    </form>
    );
  }
}

export default Form;