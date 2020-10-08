import React, { Component } from 'react';
import './Contact.css';
import Saludo from '../Saludo/Saludo';
import Form from '../Form/Form';

class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:"",
      age:null
    };
    
  }
  sendData = (nombre,edad) =>{
    this.setState({age: edad});
    this.setState({username: nombre});
  }
  render() {
    return (
      <div>
        <Saludo age ={this.state.age} username={this.state.username} titulo="Titanic"/>
        <Form onUserChange={this.sendData}/>
      </div>
    );
  }
}
export default Contact;
